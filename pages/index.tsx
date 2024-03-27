import { Transition } from "framer-motion";
import { GetStaticProps } from "next";
import getClient from "../apollo/client";
import AnimateTextRows from "../components/AnimateTextRows/AnimateTextRows";
import AutoSlider from "../components/AutoSlider/AutoSlider";
import GridItem from "../components/GridItem/GridItem";
import Head from "../components/Head/Head";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import ProjectsGrid from "../components/ProjectsGrid/ProjectsGrid";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import Slider from "../components/Slider/Slider";
import { Large } from "../components/Typo/Large";
import { Micro } from "../components/Typo/Micro";
import strings from "../data/strings";
import { Areas, Query } from "../generated/types";
import { GET_LANDINGPAGE } from "../graphql/GetLandingpage";
import { easingInOutCubic } from "../helpers/animationConfig";
import { EnhancedProject, enhanceProjects } from "../helpers/enhanceProjects";
import {
  HeroFooter,
  IndexGrid,
  IndexHeroSection,
  IndexLatestProjects,
  IndexQuote,
  IndexQuoteClient,
  IndexQuotesSlider,
  IndexServices,
  IndexSliderW,
  LandingHeroPageLogotypes,
  LandingPageHeroLogotype,
  StyledIndex,
} from "../pagestyles/StyledIndex";
import { GET_FEATURED_GRID } from "../graphql/GetFeaturedGrid";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import ClientQuote from "../components/ClientQuote/ClientQuote";

interface indexProps {
  projects: EnhancedProject[];
  latestProjects: EnhancedProject[];
  areas: Areas;
}

const Index = ({ projects, areas, latestProjects }: indexProps) => {
  const landingpageStrings = strings.landingPage;

  return (
    <>
      {/* TODO add og image */}
      <Head
        ogDescription={landingpageStrings.hero.subHeader}
        ogImageSrc={""}
        pageName={"STEEZY Studio"}
        ogTitle={"STEEZY Studio"}
      />
      <Navbar areas={areas.items} header={landingpageStrings.navbar.header} />
      <StyledIndex>
        <IndexHeroSection>
          <Hero asset={{ url: `/videos/steezy-loop.mp4`, _type: "Video" }} />
          <HeroFooter>
            <Micro as='h1'>
              We work for world-known brands while sharing our knowledge and
              passion with local start-ups and cultural pioneers.
            </Micro>
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
          </HeroFooter>
        </IndexHeroSection>

        <IndexLatestProjects>
          <SectionHeader
            header='Latest projects'
            linkText='All projects'
            url='/projects/all-projects'
          />
          <IndexSliderW>
            <Slider slidesPerView={4.2} offsetNav={0.2}>
              {latestProjects.map(
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
          </IndexSliderW>
        </IndexLatestProjects>

        <IndexQuotesSlider>
          <AutoSlider
            interval={5000}
            list={[
              `„I appreciate the creative approach, multi-dimensional overlap and fast & transparent communication with steezy.studio“`,
              `„I appreciate the creative approach, multi-dimensional overlap and fast & transparent communication with steezy.studio“`,
              `„I appreciate the creative approach, multi-dimensional overlap and fast & transparent communication with steezy.studio“`,
            ].map((text, j, a) => {
              return (
                <ClientQuote
                  key={j}
                  quote={text}
                  clientName='John Doe'
                  clientRole='CEO'
                />
              );
            })}
          />
        </IndexQuotesSlider>
        <IndexGrid>
          <SectionHeader
            header='Featured projects'
            url='/projects/all-projects'
            linkText='all projects'
          />
          <IndexGrid>
            <ProjectsGrid projects={projects} />
          </IndexGrid>
        </IndexGrid>
        <IndexServices>
          <ServicesSection areas={areas} />
        </IndexServices>
      </StyledIndex>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const client = getClient();
  const {
    data: {
      FeaturedGrid: featuredGrid,
      Projects: latestProjects,
      Areas: areas,
    },
  } = await client.query<Query>({
    query: GET_LANDINGPAGE,
    variables: { sortLatestProjects: "changed_on_DESC" },
  });

  const enhancedFeaturedGrid = enhanceProjects(
    featuredGrid.featured_projects,
    areas
  );

  const enhancedLatestProjects = enhanceProjects(latestProjects.items, areas);

  return {
    props: {
      areas: areas,
      projects: enhancedFeaturedGrid,
      latestProjects: enhancedLatestProjects,
    },
    revalidate: Number(process.env.REVALIDATE),
  };
};

export default Index;
