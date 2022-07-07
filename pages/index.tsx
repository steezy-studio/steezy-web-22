import { GetStaticProps } from "next";
import React from "react";
import client from "../apollo/client";
import GridItem from "../components/GridItem/GridItem";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import Link from "../components/Link/Link";
import { StyledLink } from "../components/Link/Styles/StyledLink";
import Navbar from "../components/Navbar/Navbar";
import { Caption } from "../components/Typo/Caption";
import { MainHeader } from "../components/Typo/MainHeader";
import strings from "../data/strings";
import { Area, Areas, LandingpageGrids } from "../generated/types";
import { GET_LANDINGPAGE } from "../graphql/GetLandingpage";
import {
  GridItemWrapper,
  Intro,
  LandingHeroPageLogotypes,
  LandingpageGrid,
  LandingpageGridRow,
  LandingpageHeroClients,
  LandingPageHeroLogotype,
  StyledIndex,
} from "../pagestyles/StyledIndex";

interface indexProps {
  landingpageGrid: LandingpageGrids;
  areas: Areas;
}

const Index = ({ landingpageGrid, areas }: indexProps) => {
  const landingpageStrings = strings.landingPage;

  return (
    <>
      <Navbar
        areas={areas.items.map(({ area_name, _slug }) => ({
          highlighted: false,
          link: `/projects/${_slug}`,
          name: area_name,
        }))}
      />
      <Layout>
        <StyledIndex>
          <Hero
            asset={{ url: `/videos/steezy-loop.mp4`, _type: "Video" }}
            header={
              <>
                <StyledLink as={`span`}>
                  {landingpageStrings.hero.header.cta}
                </StyledLink>
                {landingpageStrings.hero.header.rest}
              </>
            }
            perex={landingpageStrings.hero.subHeader}>
            <LandingpageHeroClients>
              <Caption>{landingpageStrings.hero.clients.header}</Caption>
              <LandingHeroPageLogotypes>
                {landingpageStrings.hero.clients.logotypes.map(
                  ({ src, alt }, i) => (
                    <LandingPageHeroLogotype
                      key={i}
                      src={`/icons/${src}`}
                      alt={alt}
                    />
                  )
                )}
              </LandingHeroPageLogotypes>
            </LandingpageHeroClients>
          </Hero>
          <Intro>
            <Caption>{landingpageStrings.intro.subHeader}</Caption>
            <div>
              <MainHeader as={`span`}>
                {landingpageStrings.intro.perex.map(({ type, body }, i) => {
                  const isText = type === `text`;
                  if (isText) {
                    return body;
                  }
                  if (type === `link`) {
                    return <Link href={"/projects"}>{body}</Link>;
                  }
                })}
              </MainHeader>
            </div>
          </Intro>
          <LandingpageGrid>
            {landingpageGrid.items[0].landingpage_projects_grid.map((row) => {
              if (row.__typename === `LandingpageGridRow`) {
                const isSingle = row.grid_row.length === 1;

                return (
                  <LandingpageGridRow key={row._id}>
                    {row.grid_row.map(
                      ({
                        project_grid_name,
                        landingpage_grid_image,
                        project_tags,
                        _slug,
                        _id,
                      }) => (
                        <GridItemWrapper
                          key={_id}
                          className={`${row.offset ? "offset" : ""} ${
                            isSingle ? "single" : ""
                          }`}>
                          <GridItem
                            areas={project_tags}
                            projectName={project_grid_name}
                            width={landingpage_grid_image[0].width}
                            height={landingpage_grid_image[0].height}
                            src={landingpage_grid_image[0].url}
                            slug={_slug}
                            key={_slug}
                          />
                        </GridItemWrapper>
                      )
                    )}
                  </LandingpageGridRow>
                );
              }
            })}
            <LandingpageGridRow>
              <div></div>
              <MainHeader>
                <Link href={`/projects/all-projects`}>all projects</Link>
              </MainHeader>
            </LandingpageGridRow>
          </LandingpageGrid>
        </StyledIndex>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.query({ query: GET_LANDINGPAGE });

  return {
    props: {
      landingpageGrid: data.data.LandingpageGrids,
      areas: data.data.Areas,
    },
    revalidate: Number(process.env.REVALIDATE),
  };
};

export default Index;
