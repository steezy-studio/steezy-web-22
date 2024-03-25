import { Transition } from "framer-motion";
import { GetStaticProps } from "next";
import client from "../apollo/client";
import AnimateTextRows from "../components/AnimateTextRows/AnimateTextRows";
import AutoSlider from "../components/AutoSlider/AutoSlider";
import GridItem from "../components/GridItem/GridItem";
import { Grid, GridRow } from "../components/GridItem/Styles/StyledGrid";
import Head from "../components/Head/Head";
import Hero from "../components/Hero/Hero";
import Link from "../components/Link/Link";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";
import { Large } from "../components/Typo/Large";
import { Medium } from "../components/Typo/Medium";
import { Micro } from "../components/Typo/Micro";
import strings from "../data/strings";
import { Areas, Query } from "../generated/types";
import { GET_LANDINGPAGE } from "../graphql/GetLandingpage";
import { easingInOutCubic } from "../helpers/animationConfig";
import { EnhancedProject, enhanceProjects } from "../helpers/enhanceProjects";
import {
  HeroFooter,
  IndexHeroSection,
  IndexLatestProjects,
  IndexLatestProjectsHeader,
  IndexQuote,
  IndexQuoteClient,
  IndexQuotesSlider,
  IndexSliderW,
  LandingHeroPageLogotypes,
  LandingPageHeroLogotype,
  StyledIndex,
} from "../pagestyles/StyledIndex";

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
          <IndexLatestProjectsHeader>
            <Medium>See our latest projects</Medium>
            <Link href={"/projects/all-projects"} className='no-underline'>
              <Micro className='with-dash'>All projects</Micro>
            </Link>
          </IndexLatestProjectsHeader>
          <IndexSliderW>
            <Slider slidesPerView={4.2} offsetNav={0.2}>
              {latestProjects.map(
                (
                  { project_grid_name, areas, _slug, landingpage_grid_image },
                  i
                ) => {
                  if (!landingpage_grid_image[0].url) return;
                  return (
                    <GridItem
                      key={i}
                      areas={areas}
                      wide={false}
                      projectName={project_grid_name}
                      slug={_slug}
                      src={landingpage_grid_image[0].url}
                      type='Photo'
                      height={1080}
                      width={1920}
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
            list={[0, 1, 2].map((_, j, a) => {
              const delay = 0.02;

              const createTransition = (delay) =>
                ({
                  delay: delay,
                  duration: 1.2,
                  ease: easingInOutCubic,
                } as Transition);

              return (
                <IndexQuote key={j}>
                  <Large>
                    <AnimateTextRows
                      motionProps={(i) => ({
                        initial: { x: `100%` },
                        animate: { x: `0%` },
                        exit: { x: `-100%` },
                        transition: createTransition((i + 1) * delay),
                      })}
                    >
                      {`„I appreciate the creative approach, multi-dimensional overlap
                and fast & transparent communication with steezy.studio“`}
                    </AnimateTextRows>
                  </Large>
                  <IndexQuoteClient
                    initial={{ x: `100%` }}
                    animate={{ x: `0%` }}
                    exit={{ x: `-100%` }}
                    transition={createTransition(delay + a.length * delay)}
                  >
                    <Micro>
                      Adam Křena
                      <br />
                      Head of Atelier @footshop
                    </Micro>
                  </IndexQuoteClient>
                </IndexQuote>
              );
            })}
          />
        </IndexQuotesSlider>
        <Grid>
          {projects
            .reduce((acc: EnhancedProject[][], curr: EnhancedProject) => {
              const lastItem = acc[acc.length - 1];
              if (!lastItem) return [[curr]];
              if (lastItem?.length === 2) return [...acc, [curr]];
              return [...acc.slice(0, -1), [...lastItem, curr]];
            }, [])
            .map((row, j) => {
              return (
                <GridRow key={j}>
                  {row.map((project, i) => {
                    return (
                      <GridItem
                        key={i}
                        slug={project._slug}
                        wide={(i + j) % 2 === 0}
                        projectName={project.project_grid_name}
                        src={
                          project.landingpage_grid_image[0]._type === "Video"
                            ? project.landingpage_grid_image[0].cdn_files?.[0]
                                .url
                            : project.landingpage_grid_image[0].url
                        }
                        height={project.landingpage_grid_image[0].width}
                        width={project.landingpage_grid_image[0].height}
                        areas={project.areas}
                        type={project.landingpage_grid_image[0]._type}
                      />
                    );
                  })}
                </GridRow>
              );
            })}
        </Grid>
      </StyledIndex>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
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
