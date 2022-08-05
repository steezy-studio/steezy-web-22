import { GetStaticProps } from "next";
import { Fragment } from "react";
import client from "../apollo/client";
import GridItem from "../components/GridItem/GridItem";
import Head from "../components/Head/Head";
import Hero from "../components/Hero/Hero";
import Link from "../components/Link/Link";
import { StyledLink } from "../components/Link/Styles/StyledLink";
import Navbar from "../components/Navbar/Navbar";
import { Large } from "../components/Typo/Large";
import { Micro } from "../components/Typo/Micro";
import strings from "../data/strings";
import { Areas, LandingpageGrids } from "../generated/types";
import { GET_LANDINGPAGE } from "../graphql/GetLandingpage";
import { allProjects } from "../helpers/consts";
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
      <Head />
      <Navbar
        areas={areas.items.map(({ area_name, _slug }) => ({
          highlighted: false,
          link: `/projects/${_slug}`,
          name: area_name,
        }))}
      />

      <StyledIndex>
        <Hero
          asset={{ url: `/videos/steezy-loop.mp4`, _type: "Video" }}
          header={(openDialog, setOpenDialog) => (
            <>
              <StyledLink
                as={`span`}
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
                      <Link href={`/projects/${allProjects._slug}`}>
                        {body}
                      </Link>
                      <br />
                    </Fragment>
                  );
                }
              })}
            </Large>
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
                    }) => {
                      return (
                        <GridItemWrapper
                          key={_id}
                          className={`${row.offset ? "offset" : ""} ${
                            isSingle ? "single" : ""
                          }`}>
                          <GridItem
                            type={landingpage_grid_image[0]._type}
                            areas={project_tags}
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
              <Link href={`/projects/all-projects`}>
                {strings.globals.allProjects}
              </Link>
            </Large>
          </LandingpageGridRow>
        </LandingpageGrid>
      </StyledIndex>
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
