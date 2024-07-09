import { motion } from "framer-motion";
import HTMLReactParser, {
  DOMNode,
  Element,
  domToReact,
} from "html-react-parser";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import getClient from "../../apollo/client";
import ClientQuote from "../../components/ClientQuote/ClientQuote";
import Head from "../../components/Head/Head";
import Link from "../../components/Link/Link";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectGridVimeo from "../../components/ProjectGridVimeo/ProjectGridVimeo";
import ProjectsSlider from "../../components/ProjectsSlider/ProjectsSlider";
import RevealAnimation from "../../components/RevealAnimation/RevealAnimation";
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
      <StyledProject>
        <ProjectHeroHeader>
          <RevealAnimation>
            <ProjectCard
              projectName={project.project_detail_name}
              areas={project.areas}
              cover={project.hero_image}
              videoThumb={project.grid_image[0].cover}
              wide={true}
              _static
            />
          </RevealAnimation>
          <ProjectHeroRoles>
            {project.project_facts?.map((fact, i) => {
              if (fact.__typename === "ProjectFacts") {
                return (
                  <RevealAnimation key={i} delay={i * 0.3}>
                    <ProjectHeroRole>
                      <Nano>{fact.header}</Nano>
                      <Small className='bold break-lines'>{fact.content}</Small>
                    </ProjectHeroRole>
                  </RevealAnimation>
                );
              }
            })}
          </ProjectHeroRoles>
        </ProjectHeroHeader>
        <RevealAnimation>
          <ProjectDescription>
            <Small className='bold'>{project.project_description}</Small>
          </ProjectDescription>
        </RevealAnimation>
        <ProjectGrid>
          {project.project_presentation?.map((row, i) => {
            if (row.__typename === "ProjectGridRow") {
              return (
                <ProjectGridRow key={`${i}_row`}>
                  {row.grid_item_image.map((img, i) => {
                    if (img._type === "Video") {
                      return (
                        <RevealAnimation key={img._id}>
                          <Video src={img.cdn_files[0].url} />
                        </RevealAnimation>
                      );
                    }
                    if (img._type === "Photo") {
                      return (
                        <RevealAnimation key={`${i}_col`} delay={i * 0.3}>
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
                        </RevealAnimation>
                      );
                    }
                  })}
                </ProjectGridRow>
              );
            }
            if (row.__typename === "ProjectGridVimeo") {
              const vimeoIds = row.vimeo_id.split("\r\n");

              return (
                <RevealAnimation key={`${i}_row`}>
                  <ProjectGridRow>
                    {vimeoIds.map((id, i) => (
                      <ProjectGridVimeo key={i} vimeoId={id} />
                    ))}
                  </ProjectGridRow>
                </RevealAnimation>
              );
            }
            if (row.__typename === "ProjectGridBlockquote") {
              return (
                <RevealAnimation key={`${i}_row`}>
                  <ProjectGridRow
                    className={`blockquote ${row.alignment ? "reverse" : ""}`}
                  >
                    <ProjectGridBlockquote>
                      <Small className='bold' as={"span"}>
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
                </RevealAnimation>
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
          <ProjectsSlider
            projects={similar_projects}
            header={"Related projects"}
            linkText={"All projects"}
            url='/projects/all-projects'
          />
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
