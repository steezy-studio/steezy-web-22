import { GetStaticProps } from "next";
import { Fragment, useContext } from "react";
import client from "../apollo/client";
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
import { allProjects } from "../helpers/consts";
import { EnhancedProject, enhanceProjects } from "../helpers/enhanceProjects";
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
import { HoverProvider } from "./_app";

interface indexProps {
  landingpageGrid: LandingpageGridRowType[];
  areas: Areas;
}

const Index = ({ landingpageGrid, areas }: indexProps) => {
  const landingpageStrings = strings.landingPage;
  const { setCursorType } = useContext(HoverProvider);

  return (
    <>
      {/* TODO add og image */}
      <Head
        ogDescription={landingpageStrings.hero.subHeader}
        ogImageSrc={""}
        pageName={"STEEZY Studio"}
        ogTitle={"STEEZY Studio"}
      />
      <Navbar areas={areas.items} />
      <StyledIndex>
        <Hero
          asset={{ url: `/videos/steezy-loop.mp4`, _type: "Video" }}
          header={(openDialog, setOpenDialog) => (
            <>
              <StyledLink
                as={`span`}
                onMouseEnter={() => setCursorType("hover")}
                onMouseLeave={() => setCursorType("normal")}
                onClick={() => setOpenDialog(!openDialog)}>
                {landingpageStrings.hero.header.cta}
              </StyledLink>
              {landingpageStrings.hero.header.rest}
            </>
          )}
          perex={landingpageStrings.hero.subHeader}>
          <LandingpageHeroClients>
            <Micro>{landingpageStrings.hero.clients.header}</Micro>
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
        <Intro data-scroll data-scroll-speed='2'>
          <Micro>{landingpageStrings.intro.subHeader}</Micro>
          <div>
            <Large as={`span`}>
              {landingpageStrings.intro.perex.map(({ type, body }, i) => {
                const isText = type === `text`;
                if (isText) {
                  return <Fragment key={i}>{body}</Fragment>;
                }
                if (type === `link`) {
                  return (
                    <Fragment key={i}>
                      <StyledLink
                        as={"a"}
                        href={`/projects/${allProjects._slug}`}>
                        {body}
                      </StyledLink>
                      <br />
                    </Fragment>
                  );
                }
              })}
            </Large>
          </div>
        </Intro>
        <LandingpageGrid>
          {landingpageGrid.map((row) => {
            if (row.__typename === `LandingpageGridRow`) {
              const isSingle = row.grid_row.length === 1;

              return (
                <LandingpageGridRow key={row._id}>
                  {row.grid_row.map(
                    ({
                      project_grid_name,
                      landingpage_grid_image,

                      _slug,
                      _id,
                      areas,
                    }: EnhancedProject) => {
                      return (
                        <GridItemWrapper
                          key={_id}
                          className={`${row.offset ? "offset" : ""} ${
                            isSingle ? "single" : ""
                          }`}>
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
                        </GridItemWrapper>
                      );
                    }
                  )}
                </LandingpageGridRow>
              );
            }
          })}
          <LandingpageGridRow>
            <div></div>
            <Large>
              <StyledLink as={"a"} href={`/projects/all-projects`}>
                {strings.globals.allProjects}
              </StyledLink>
            </Large>
          </LandingpageGridRow>
        </LandingpageGrid>
      </StyledIndex>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const data = await client.query<Query>({ query: GET_LANDINGPAGE });

  const enhancedGrid =
    data.data.LandingpageGrids.items[0].landingpage_projects_grid.map((row) => {
      return {
        ...row,
        grid_row: enhanceProjects(row.grid_row, data.data.Areas),
      };
    });

  return {
    props: {
      landingpageGrid: enhancedGrid,
      areas: data.data.Areas,
    },
    revalidate: Number(process.env.REVALIDATE),
  };
};

export default Index;
