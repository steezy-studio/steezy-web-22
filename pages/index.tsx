import React from "react";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import { StyledLink } from "../components/Link/Styles/StyledLink";
import { SubHeader } from "../components/Typo/SubHeader";
import strings from "../data/strings";
import {
  LandingHeroPageLogotypes,
  LandingpageHeroClients,
  LandingPageHeroLogotype,
  StyledIndex,
} from "../pagestyles/StyledIndex";

interface indexProps {}

const Index = ({}: indexProps) => {
  const data = strings.landingPage;
  return (
    <Layout>
      <StyledIndex>
        <Hero
          header={
            <>
              <StyledLink>{data.hero.header.cta}</StyledLink>
              {data.hero.header.rest}
            </>
          }
          subHeader={data.hero.subHeader}>
          <LandingpageHeroClients>
            <SubHeader>{data.hero.clients.header}</SubHeader>
            <LandingHeroPageLogotypes>
              {data.hero.clients.logotypes.map(({ src, alt }) => (
                <LandingPageHeroLogotype src={`/icons/${src}`} alt={alt} />
              ))}
            </LandingHeroPageLogotypes>
          </LandingpageHeroClients>
        </Hero>
      </StyledIndex>
    </Layout>
  );
};

export default Index;
