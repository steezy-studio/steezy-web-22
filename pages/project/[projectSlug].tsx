import Vimeo from "@u-wave/react-vimeo";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import client from "../../apollo/client";
import Hero from "../../components/Hero/Hero";
import Img from "../../components/Img/Img";
import { StyledImg } from "../../components/Img/Styles/StyledImg";
import Navbar from "../../components/Navbar/Navbar";
import { Caption } from "../../components/Typo/Caption";
import { MainHeader } from "../../components/Typo/MainHeader";
import { Perex } from "../../components/Typo/Perex";
import { Areas, Project as ProjectType, Query } from "../../generated/types";
import { GET_PROJECT } from "../../graphql/GetProject";
import {
  ClientQuote,
  ClientQuoteLeft,
  ClientQuoteRight,
  ProjectDescription,
  ProjectGrid,
  ProjectGridBlockquote,
  ProjectGridRow,
  ProjectGridVimeo,
  ProjectHeroFooter,
  ProjectHeroRole,
  ProjectHeroRoles,
  StyledProject,
} from "../../pagestyles/StyledProject";
import { Quote } from "../../pagestyles/StyledStudio";

interface ProjectProps {
  projectData: ProjectType;
  areas: Areas;
}

const Project = ({ projectData, areas }: ProjectProps) => {
  return (
    <>
      <Navbar
        areas={areas.items.map(({ area_name, _slug }) => ({
          highlighted: false,
          link: `/projects/${_slug}`,
          name: area_name,
        }))}
      />
      <StyledProject>
        <Hero
          asset={projectData.hero_image[0]}
          header={() => projectData.project_detail_name}
          subHeader={``}>
          <ProjectHeroFooter>
            <ProjectHeroRoles>
              {projectData.project_facts?.map((fact, i) => {
                if (fact.__typename === "ProjectFacts") {
                  return (
                    <ProjectHeroRole key={i}>
                      <Caption>{fact.header}</Caption>
                      <Caption className='lowcase'>{fact.content}</Caption>
                    </ProjectHeroRole>
                  );
                }
              })}
            </ProjectHeroRoles>
            <StyledImg as={"img"} src={projectData.client_logo[0].url} />
          </ProjectHeroFooter>
        </Hero>
        <ProjectDescription>
          <Perex>{projectData.project_description}</Perex>
        </ProjectDescription>
        <ProjectGrid>
          {projectData.project_presentation?.map((row, i) => {
            if (row.__typename === "ProjectGridRow") {
              return (
                <ProjectGridRow key={`${i}_row`}>
                  {row.grid_item_image.map((img, i) => (
                    <Img
                      key={`${i}_col`}
                      src={img.url}
                      width={img.width}
                      height={img.height}
                      layout={"responsive"}
                      blurDataURL={img.url}
                      placeholder={"blur"}
                    />
                  ))}
                </ProjectGridRow>
              );
            }
            if (row.__typename === "ProjectGridVimeo") {
              return <ProjectGridVimeo video={row.vimeo_id} responsive />;
            }
            if (row.__typename === "ProjectGridBlockquote") {
              return (
                <ProjectGridRow key={`${i}_row`}>
                  <div></div>
                  <ProjectGridBlockquote>
                    <Perex key={row._id}>{row.blockquote_text}</Perex>
                  </ProjectGridBlockquote>
                </ProjectGridRow>
              );
            }
          })}
        </ProjectGrid>
        {projectData.client_quote && (
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
              <Perex>{projectData.client_quote}</Perex>
              <Caption>{projectData.client_name}</Caption>
              <br />
              <Caption className='lowcase'>
                {projectData.client_position}
              </Caption>
            </ClientQuoteRight>
          </ClientQuote>
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
    props: { areas: data.data.Areas, projectData: data.data.Project },
    revalidate: Number(process.env.REVALIDATE),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: `blocking` };
};

export default Project;
