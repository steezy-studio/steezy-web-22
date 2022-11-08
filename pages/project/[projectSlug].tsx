import { motion } from "framer-motion";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import client from "../../apollo/client";
import Animation from "../../components/Animation/Animation";
import Head from "../../components/Head/Head";
import Hero from "../../components/Hero/Hero";
import Img from "../../components/Img/Img";
import { StyledImg } from "../../components/Img/Styles/StyledImg";
import Link from "../../components/Link/Link";
import Navbar from "../../components/Navbar/Navbar";
import ProjectGridVimeo from "../../components/ProjectGridVimeo/ProjectGridVimeo";
import { Medium } from "../../components/Typo/Medium";
import { Micro } from "../../components/Typo/Micro";
import Video from "../../components/Video/Video";
import { Areas, Project as ProjectType, Query } from "../../generated/types";
import { GET_PROJECT } from "../../graphql/GetProject";
import { colors } from "../../helpers/consts";
import {
  Breadcrumbs,
  ClientQuote,
  ClientQuoteLeft,
  ClientQuoteRight,
  ProjectDescription,
  ProjectGrid,
  ProjectGridBlockquote,
  ProjectGridRow,
  ProjectHeroFooter,
  ProjectHeroRole,
  ProjectHeroRoles,
  StyledProject,
} from "../../pagestyles/StyledProject";

interface ProjectProps {
  projectData: ProjectType;
  areas: Areas;
}

const Project = ({ projectData, areas }: ProjectProps) => {
  const defaultArea = areas.items.find((area) => area.is_default);
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
        <Hero
          asset={projectData.hero_image[0]}
          header={() => projectData.project_detail_name}
          subHeader={
            <Breadcrumbs>
              <Micro>
                <Link href={`/projects/${defaultArea._slug}`}>
                  {defaultArea.area_name}
                </Link>
              </Micro>
              <div
                style={{
                  height: 1,
                  width: 20,
                  backgroundColor: colors.black,
                  display: "inline-block",
                }}
              />
              <Micro>{projectData.company_name}</Micro>
            </Breadcrumbs>
          }>
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
            <StyledImg as={"img"} src={projectData.client_logo[0].url} />
          </ProjectHeroFooter>
        </Hero>
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
              return (
                <Animation key={`${i}_row`} type={"fadeFromBottom"}>
                  <ProjectGridVimeo vimeoId={row.vimeo_id} />
                </Animation>
              );
            }
            if (row.__typename === "ProjectGridBlockquote") {
              return (
                <Animation key={`${i}_row`} type='fadeFromBottom'>
                  <ProjectGridRow
                    className={`blockquote ${row.alignment ? "reverse" : ""}`}>
                    <ProjectGridBlockquote>
                      <Medium>{row.blockquote_text}</Medium>
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
                <Micro>{projectData.client_name}</Micro>
                <br />
                <Micro className='lowcase'>{projectData.client_position}</Micro>
              </ClientQuoteRight>
            </ClientQuote>
          </Animation>
        )}
        {/* {projectData.next_project[0] && (
          <Animation type='fadeFromBottom'>
            <NextProjectSection>
              <Large>{strings.globals.nextProject}</Large>
              <GridItem
                areas={projectData.next_project[0].project_tags}
                type={"Photo"}
                width={projectData.next_project[0].hero_image[0].width}
                height={projectData.next_project[0].hero_image[0].height}
                src={projectData.next_project[0].hero_image[0].url}
                projectName={projectData.next_project[0].project_grid_name}
                slug={projectData.next_project[0]._slug}
              />
            </NextProjectSection>
          </Animation>
        )} */}
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
    props: { areas: data.data.Areas, projectData: data.data.Project },
    revalidate: Number(process.env.REVALIDATE),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: `blocking` };
};

export default Project;
