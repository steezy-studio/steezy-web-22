import { GetStaticProps } from "next";
import React from "react";
import client from "../apollo/client";
import GridItem from "../components/GridItem/GridItem";
import Hero from "../components/Hero/Hero";
import Img from "../components/Img/Img";
import Layout from "../components/Layout/Layout";
import { StyledLink } from "../components/Link/Styles/StyledLink";
import { Caption } from "../components/Typo/Caption";
import strings from "../data/strings";
import { LandingpageGrids } from "../generated/types";
import { GET_LANDINGPAGE_GRID } from "../graphql/GetLandingpageGrid";
import {
  LandingHeroPageLogotypes,
  LandingpageHeroClients,
  LandingPageHeroLogotype,
  StyledIndex,
} from "../pagestyles/StyledIndex";

interface indexProps {
  data: LandingpageGrids;
}

const Index = ({ data }: indexProps) => {
  const landingpageStrings = strings.landingPage;

  return (
    <Layout>
      <StyledIndex>
        <Hero
          header={
            <>
              <StyledLink>{landingpageStrings.hero.header.cta}</StyledLink>
              {landingpageStrings.hero.header.rest}
            </>
          }
          subHeader={landingpageStrings.hero.subHeader}>
          <LandingpageHeroClients>
            <Caption>{landingpageStrings.hero.clients.header}</Caption>
            <LandingHeroPageLogotypes>
              {landingpageStrings.hero.clients.logotypes.map(({ src, alt }) => (
                <LandingPageHeroLogotype src={`/icons/${src}`} alt={alt} />
              ))}
            </LandingHeroPageLogotypes>
          </LandingpageHeroClients>
        </Hero>
        {data.items[0].landingpage_project.map(
          ({ project_name, landingpage_grid_image, project_areas, _slug }) => (
            <GridItem
              areas={project_areas}
              projectName={project_name}
              width={landingpage_grid_image[0].width}
              height={landingpage_grid_image[0].height}
              src={landingpage_grid_image[0].url}
              slug={_slug}
              key={_slug}
            />
          )
        )}
      </StyledIndex>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.query({ query: GET_LANDINGPAGE_GRID });

  return {
    props: { data: data.data.LandingpageGrids },
    revalidate: Number(process.env.REVALIDATE),
  };
};

export default Index;
