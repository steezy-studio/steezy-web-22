import { Transition, motion } from "framer-motion";
import { GetStaticProps } from "next";
import { Fragment, useContext } from "react";
import client from "../apollo/client";
import Animation from "../components/Animation/Animation";
import GridItem from "../components/GridItem/GridItem";
import Head from "../components/Head/Head";
import Hero from "../components/Hero/Hero";
import { StyledLink } from "../components/Link/Styles/StyledLink";
import Navbar from "../components/Navbar/Navbar";
import { Large } from "../components/Typo/Large";
import { Micro } from "../components/Typo/Micro";
import strings from "../data/strings";
import {
  Areas,
  LandingpageGridRow as LandingpageGridRowType,
  Query,
} from "../generated/types";
import { GET_LANDINGPAGE } from "../graphql/GetLandingpage";
import { EnhancedProject, enhanceProjects } from "../helpers/enhanceProjects";
import { splitArray } from "../helpers/splitArray";
import {
  GridItemWrapper,
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
  LandingpageGrid,
  LandingpageGridRow,
  StyledIndex,
} from "../pagestyles/StyledIndex";
import { Blockquote, Quote } from "../pagestyles/StyledStudio";
import { HoverProvider } from "./_app";
import Slider from "../components/Slider/Slider";
import { Medium } from "../components/Typo/Medium";
import Link from "../components/Link/Link";
import AnimateTextRows from "../components/AnimateTextRows/AnimateTextRows";
import AutoSlider from "../components/AutoSlider/AutoSlider";
import { easing, easingInOutCubic } from "../helpers/animationConfig";

interface indexProps {
  landingpageGrid: LandingpageGridRowType[];
  latestProjects: EnhancedProject[];
  areas: Areas;
}

const Index = ({ landingpageGrid, areas, latestProjects }: indexProps) => {
  const landingpageStrings = strings.landingPage;
  const { setCursorType } = useContext(HoverProvider);

  const [firstGridPart, secondGridPart] = splitArray<LandingpageGridRowType>(
    landingpageGrid,
    Math.floor(landingpageGrid.length / 2)
  );

  const landingpageGridWithQuotes = [
    ...firstGridPart,
    landingpageStrings.quotes[0],
    ...secondGridPart,
  ];

  const renderTextWithLink = ({ type, body, href }, i) => {
    if (type === `text`) {
      return <Fragment key={i}>{body}</Fragment>;
    }
    if (type === `link`) {
      return (
        <Fragment key={i}>
          <StyledLink
            as={"a"}
            href={href}
            onMouseEnter={() => setCursorType("hover")}
            onMouseLeave={() => setCursorType("normal")}
          >
            {body}
          </StyledLink>
          <br />
        </Fragment>
      );
    }
  };

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
                      height={1080}
                      projectName={project_grid_name}
                      slug={_slug}
                      src={landingpage_grid_image[0].url}
                      type='Photo'
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
            interval={9000}
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
      </StyledIndex>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const data = await client.query<Query>({
    query: GET_LANDINGPAGE,
    variables: { sortLatestProjects: "changed_on_DESC" },
  });

  const enhancedGrid =
    data.data.LandingpageGrids.items[0].landingpage_projects_grid.map((row) => {
      return {
        ...row,
        grid_row: enhanceProjects(row.grid_row, data.data.Areas),
      };
    });

  const enhancedLatestProjects = enhanceProjects(
    data.data.Projects.items,
    data.data.Areas
  );

  return {
    props: {
      landingpageGrid: enhancedGrid,
      areas: data.data.Areas,
      latestProjects: enhancedLatestProjects,
    },
    revalidate: Number(process.env.REVALIDATE),
  };
};

export default Index;
