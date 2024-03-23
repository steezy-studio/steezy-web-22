import { motion } from "framer-motion";
import parse, { DOMNode, domToReact, Element } from "html-react-parser";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { useContext } from "react";
import client from "../../apollo/client";
import Animation from "../../components/Animation/Animation";
import ClassicGrid from "../../components/ClassicGrid/ClassicGrid";
import GridItem from "../../components/GridItem/GridItem";
import Head from "../../components/Head/Head";
import Hero from "../../components/Hero/Hero";
import Img from "../../components/Img/Img";
import { StyledImg } from "../../components/Img/Styles/StyledImg";
import Link from "../../components/Link/Link";
import { StyledLink } from "../../components/Link/Styles/StyledLink";
import Navbar from "../../components/Navbar/Navbar";
import ProjectGridVimeo from "../../components/ProjectGridVimeo/ProjectGridVimeo";
import { Large } from "../../components/Typo/Large";
import { Medium } from "../../components/Typo/Medium";
import { Micro } from "../../components/Typo/Micro";
import Video from "../../components/Video/Video";
import strings from "../../data/strings";
import { Areas, Project as ProjectType, Query } from "../../generated/types";
import { GET_PROJECT } from "../../graphql/GetProject";
import { colors, device } from "../../helpers/consts";
import { enhanceProjects } from "../../helpers/enhanceProjects";
import { useWindowSize } from "../../hooks/useWindowSize";
import {
  Breadcrumbs,
  ClientQuote,
  ClientQuoteLeft,
  ClientQuoteRight,
  NextProjectHead,
  NextProjectSection,
  ProjectDescription,
  ProjectGrid,
  ProjectGridBlockquote,
  ProjectGridRow,
  ProjectHeroFooter,
  ProjectHeroRole,
  ProjectHeroRoles,
  StyledProject,
} from "../../pagestyles/StyledProject";
import { HoverProvider } from "../_app";

interface ProjectProps {
  projectData: ProjectType;
  areas: Areas;
}

const Project = ({ projectData, areas }: ProjectProps) => {
  const defaultArea = areas.items.find((area) => area.is_default);

  const { setCursorType } = useContext(HoverProvider);
  const { w } = useWindowSize();

  return (
    <>
      <Head
        ogTitle={projectData.project_detail_name}
        ogDescription={projectData.project_description}
        ogImageSrc={projectData.hero_image[0].url}
        pageName={[`Project`, projectData.project_detail_name]}
      />
      <Navbar areas={areas.items} />
      <StyledProject>
        <Hero asset={projectData.hero_image[0]} />
        <ProjectHeroFooter>
          <ProjectHeroRoles>
            {projectData.project_facts?.map((fact, i) => {
              if (fact.__typename === "ProjectFacts") {
                return (
                  <ProjectHeroRole key={i}>
                    <Micro>{fact.header}</Micro>
                    <Micro className='lowcase'>{fact.content}</Micro>
                  </ProjectHeroRole>
                );
              }
            })}
          </ProjectHeroRoles>
          {w > device.phone && (
            <StyledImg
              className='client-logo'
              as={"img"}
              src={projectData.client_logo[0].url}
            />
          )}
        </ProjectHeroFooter>
        <ProjectDescription>
          <Medium>{projectData.project_description}</Medium>
        </ProjectDescription>
        <ProjectGrid>
          {projectData.project_presentation?.map((row, i) => {
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
                            <Img
                              src={img.url || ``}
                              width={img.width || 0}
                              height={img.height || 0}
                              layout={"responsive"}
                              blurDataURL={img.url}
                              placeholder={"blur"}
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
                      <Medium>
                        {parse(row.blockquote_text, {
                          replace(domNode) {
                            if (domNode instanceof Element && domNode.attribs) {
                              if (domNode.name === "a") {
                                return (
                                  <StyledLink
                                    as={"a"}
                                    href={domNode.attribs.href}
                                    onMouseEnter={() => setCursorType("hover")}
                                    onMouseLeave={() => setCursorType("normal")}
                                  >
                                    {domToReact(
                                      (domNode as Element).children as DOMNode[]
                                    )}
                                  </StyledLink>
                                );
                              }
                              return domNode;
                            }
                          },
                        })}
                      </Medium>
                    </ProjectGridBlockquote>
                  </ProjectGridRow>
                </Animation>
              );
            }
          })}
        </ProjectGrid>
        {projectData.client_quote && (
          <Animation type='fadeFromBottom'>
            <ClientQuote>
              <ClientQuoteLeft>
                <Img
                  className='desktop'
                  src={
                    projectData.client_photo?.[0]?.url ||
                    `/icons/avatar-default.svg`
                  }
                  width={250}
                  height={250}
                  layout={"responsive"}
                />
              </ClientQuoteLeft>
              <ClientQuoteRight>
                <Medium>{projectData.client_quote}</Medium>
                <Img
                  className='phone'
                  src={
                    projectData.client_photo?.[0]?.url ||
                    `/icons/avatar-default.svg`
                  }
                  width={250}
                  height={250}
                  layout={"responsive"}
                />
                <Micro>{projectData.client_name}</Micro>
                <br />
                <Micro className='lowcase'>{projectData.client_position}</Micro>
              </ClientQuoteRight>
            </ClientQuote>
          </Animation>
        )}
        {projectData.next_project.length > 0 && (
          <NextProjectSection>
            <NextProjectHead>
              {w >= device.phone ? (
                <Large className='related-project'>
                  {strings.globals.relatedProject}
                </Large>
              ) : (
                <Micro>{strings.globals.relatedProject}</Micro>
              )}
              <Large className='back-to-projects'>
                <StyledLink
                  as={"a"}
                  href={"/projects/all-projects"}
                  onMouseEnter={() => setCursorType("hover")}
                  onMouseLeave={() => setCursorType("normal")}
                >
                  {strings.globals.backToProjects}
                </StyledLink>
              </Large>
            </NextProjectHead>
            <ClassicGrid>
              {(w >= device.phone
                ? projectData.next_project
                : [projectData.next_project[0]]
              ).map(
                (
                  // @ts-ignore
                  { project_grid_name, landingpage_grid_image, _slug, areas }
                ) => (
                  <GridItem
                    type={landingpage_grid_image[0]._type}
                    areas={areas}
                    projectName={project_grid_name}
                    videoThumb={landingpage_grid_image[0].cover}
                    width={landingpage_grid_image[0].width}
                    height={landingpage_grid_image[0].height}
                    src={
                      landingpage_grid_image[0]._type === "Video"
                        ? landingpage_grid_image[0].cdn_files[0].url
                        : landingpage_grid_image[0].url
                    }
                    slug={_slug}
                    key={_slug}
                  />
                )
              )}
            </ClassicGrid>
          </NextProjectSection>
        )}
      </StyledProject>
    </>
  );
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{
  projectSlug: string;
}>) => {
  const data = await client.query<Query>({
    query: GET_PROJECT,
    variables: { slug: params.projectSlug },
  });

  return {
    props: {
      areas: data.data.Areas,
      projectData: {
        ...data.data.Project,
        next_project: enhanceProjects(
          data.data.Project.next_project,
          data.data.Areas
        ),
      },
    },
    revalidate: Number(process.env.REVALIDATE),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: `blocking` };
};

export default Project;
