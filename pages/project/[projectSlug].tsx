import { motion } from "framer-motion";
import HTMLReactParser, {
  DOMNode,
  Element,
  domToReact,
} from "html-react-parser";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import getClient from "../../apollo/client";
import Animation from "../../components/Animation/Animation";
import ClientQuote from "../../components/ClientQuote/ClientQuote";
import GridItem from "../../components/GridItem/GridItem";
import Head from "../../components/Head/Head";
import Link from "../../components/Link/Link";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectGridVimeo from "../../components/ProjectGridVimeo/ProjectGridVimeo";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Slider from "../../components/Slider/Slider";
import { Nano } from "../../components/Typo/Nano";
import { Small } from "../../components/Typo/Small";
import Video from "../../components/Video/Video";
import {
  Areas,
  Query,
  QuerySimilar_ProjectsArgs,
} from "../../generated/preprTypes";
import { GET_PROJECT } from "../../graphql/GetProject";
import { GET_SIMILAR_PROJECTS } from "../../graphql/GetSimilarProjects";
import {
  EnhancedProject,
  enhanceProjects,
} from "../../helpers/enhanceProjects";
import {
  ProjectDescription,
  ProjectDetailImg,
  ProjectDetailQuote,
  ProjectGrid,
  ProjectGridBlockquote,
  ProjectGridRow,
  ProjectHeroHeader,
  ProjectHeroRole,
  ProjectHeroRoles,
  SimilarProjectsSlider,
  StyledProject,
} from "../../pagestyles/StyledProject";

interface ProjectProps {
  projectData: {
    project: EnhancedProject[];
    similar_projects: EnhancedProject[];
  };
  areas: Areas;
}

const Project = ({ projectData, areas }: ProjectProps) => {
  const { project: _project, similar_projects } = projectData;
  const project = _project[0];

  return (
    <>
      <Head
        ogTitle={project.project_detail_name}
        ogDescription={project.project_description}
        ogImageSrc={project.hero_image[0].url}
        pageName={[`Project`, project.project_detail_name]}
      />
      <Navbar areas={areas.items} header={project.company_name} />
      <StyledProject>
        <ProjectHeroHeader>
          <ProjectCard
            projectName={project.project_detail_name}
            areas={project.areas}
            cover={project.hero_image}
            videoThumb={project.hero_image[0].cover}
            wide={true}
            _static
          />
          <ProjectHeroRoles>
            {project.project_facts?.map((fact, i) => {
              if (fact.__typename === "ProjectFacts") {
                return (
                  <ProjectHeroRole key={i}>
                    <Nano>{fact.header}</Nano>
                    <Small className='medium break-lines'>{fact.content}</Small>
                  </ProjectHeroRole>
                );
              }
            })}
          </ProjectHeroRoles>
        </ProjectHeroHeader>
        <ProjectDescription>
          <Small className='medium'>{project.project_description}</Small>
        </ProjectDescription>
        <ProjectGrid>
          {project.project_presentation?.map((row, i) => {
            if (row.__typename === "ProjectGridRow") {
              return (
                <ProjectGridRow key={`${i}_row`}>
                  {row.grid_item_image.map((img, i) => {
                    if (img._type === "Video") {
                      return (
                        <Animation key={img._id} type='fadeFromBottom'>
                          <Video src={img.cdn_files[0].url} />
                        </Animation>
                      );
                    }
                    if (img._type === "Photo") {
                      return (
                        <Animation key={`${i}_col`} type={"fadeFromBottom"}>
                          <motion.div>
                            <ProjectDetailImg
                              src={img.url || ``}
                              width={img.width}
                              height={img.height}
                              blurDataURL={img.url}
                              placeholder={"blur"}
                              alt={project.project_detail_name}
                            />
                          </motion.div>
                        </Animation>
                      );
                    }
                  })}
                </ProjectGridRow>
              );
            }
            if (row.__typename === "ProjectGridVimeo") {
              const vimeoIds = row.vimeo_id.split("\r\n");

              return (
                <Animation key={`${i}_row`} type={"fadeFromBottom"}>
                  <ProjectGridRow>
                    {vimeoIds.map((id, i) => (
                      <ProjectGridVimeo key={i} vimeoId={id} />
                    ))}
                  </ProjectGridRow>
                </Animation>
              );
            }
            if (row.__typename === "ProjectGridBlockquote") {
              return (
                <Animation key={`${i}_row`} type='fadeFromBottom'>
                  <ProjectGridRow
                    className={`blockquote ${row.alignment ? "reverse" : ""}`}
                  >
                    <ProjectGridBlockquote>
                      <Small className='medium' as={"span"}>
                        {HTMLReactParser(row.blockquote_text, {
                          replace(domNode) {
                            if (domNode instanceof Element && domNode.attribs) {
                              if (domNode.name === "a") {
                                return (
                                  <Link as={"a"} href={domNode.attribs.href}>
                                    {domToReact(
                                      (domNode as Element).children as DOMNode[]
                                    )}
                                  </Link>
                                );
                              }
                              return domNode;
                            }
                          },
                        })}
                      </Small>
                    </ProjectGridBlockquote>
                  </ProjectGridRow>
                </Animation>
              );
            }
          })}
        </ProjectGrid>
        <ProjectDetailQuote>
          {project.client_quote && (
            <ClientQuote
              clientName={project.client_name}
              clientRole={project.client_position}
              quote={project.client_quote}
            />
          )}
        </ProjectDetailQuote>
        <SimilarProjectsSlider>
          <SectionHeader
            header='Related projects'
            linkText='All projects'
            url='/projects/all-projects'
          />
          <Slider slidesPerView={4.2} offsetNav={0.2}>
            {similar_projects.map(
              ({ project_grid_name, areas, _slug, grid_image }, i) => {
                return (
                  <GridItem
                    key={i}
                    areas={areas}
                    wide={false}
                    projectName={project_grid_name}
                    slug={_slug}
                    cover={grid_image}
                  />
                );
              }
            )}
          </Slider>
        </SimilarProjectsSlider>
      </StyledProject>
    </>
  );
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{
  projectSlug: string;
}>) => {
  const client = getClient();
  const {
    data: { Project: project, Areas: areas },
  } = await client.query<Query>({
    query: GET_PROJECT,
    variables: { slug: params.projectSlug },
  });
  const {
    data: { Similar_Projects: similar_projects },
  } = await client.query<Query>({
    query: GET_SIMILAR_PROJECTS,
    variables: { id: project._id, limit: 10 } as QuerySimilar_ProjectsArgs,
  });

  return {
    props: {
      areas: areas,
      projectData: {
        project: enhanceProjects([project], areas),
        similar_projects: enhanceProjects(similar_projects.items, areas),
      },
    },
    revalidate: Number(process.env.REVALIDATE),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: `blocking` };
};

export default Project;
