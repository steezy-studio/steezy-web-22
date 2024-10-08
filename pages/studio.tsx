import { GetStaticProps } from "next";
import { useContext, useEffect } from "react";
import getClient from "../apollo/client";
import { Query } from "../cms";
import Gallery from "../components/Gallery/Gallery";
import Head from "../components/Head/Head";
import HeaderLine from "../components/HeaderLine/HeaderLine";
import { NavbarContext } from "../components/Navbar/NavbarControls";
import ProjectsSlider from "../components/ProjectsSlider/ProjectsSlider";
import RevealAnimation from "../components/RevealAnimation/RevealAnimation";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import Showreel from "../components/Showreel/Showreel";
import { Large } from "../components/Typo/Large";
import { Medium } from "../components/Typo/Medium";
import { Micro } from "../components/Typo/Micro";
import { Small } from "../components/Typo/Small";
import ValuesList from "../components/ValueItem/ValuesList";
import strings from "../data/strings";
import { Areas } from "../generated/preprTypes";
import { GET_ALL_AREAS } from "../graphql/GetAllAreas";
import { GET_LATEST_PROJECTS } from "../graphql/GetLatestProjects";
import { EnhancedProject, enhanceProjects } from "../helpers/enhanceProjects";
import {
  BrandsHeader,
  BrandsSection,
  Logo,
  Logotypes,
  OurStudio,
  OurStudioSliderImg,
  StudioHero,
  StudioLatestProjects,
  StudioServiceCover,
  StudioServices,
  StudioServicesSectionW,
  StudioShowreelW,
  StyledStudio,
  TextBlock,
  TextBlockBody,
  TextBlockHeader,
  ValuesCover,
  ValuesCoverW,
  ValuesSection,
} from "../pagestyles/StyledStudio";

interface StudioProps {
  areas: Areas;
  latestProjects: EnhancedProject[];
}

const Studio = ({ areas, latestProjects }: StudioProps) => {
  const studioStrings = strings.studioPage;
  const { setNavbarHeader } = useContext(NavbarContext);
  useEffect(() => {
    setNavbarHeader(studioStrings.navbar.header);
  }, []);

  return (
    <>
      <Head
        pageName={studioStrings.head.pageName}
        ogDescription={studioStrings.hero.subHeader}
        ogImageSrc={`/images/studio/studio_1.jpg`}
        ogTitle={studioStrings.hero.header.rest}
      />

      <StyledStudio>
        <StudioHero>
          <Large>
            We're creative house building strong visual identities and
            communication strategies behind inspiring brands.
          </Large>
        </StudioHero>
        <StudioLatestProjects>
          <ProjectsSlider
            header='Latest projects'
            linkText={"All projects"}
            url={"/projects/all-projects"}
            projects={latestProjects}
          />
        </StudioLatestProjects>
        <RevealAnimation>
          <TextBlock>
            <TextBlockHeader>
              <HeaderLine>
                <Micro className='uppercase' as={"h2"}>
                  {studioStrings.intro.header}
                </Micro>
              </HeaderLine>
              <Medium className='medium'>{studioStrings.intro.perex}</Medium>
            </TextBlockHeader>
            <TextBlockBody>
              <Small>{studioStrings.intro.paragraph}</Small>
            </TextBlockBody>
          </TextBlock>
        </RevealAnimation>

        <OurStudio>
          <Gallery>
            {studioStrings.slider.map((img, i) => {
              // Hide ex gf to keep my sanity during development
              if (!img.wsf && process.env.NODE_ENV === "development") return;
              return (
                <OurStudioSliderImg
                  draggable={false}
                  priority
                  key={i}
                  src={`/images/crew/${img.src}`}
                  width={img.height}
                  height={img.width}
                  alt='studio'
                />
              );
            })}
          </Gallery>
        </OurStudio>

        <ValuesSection id='values-section'>
          <ValuesList list={studioStrings.values.list} />
          <ValuesCoverW>
            <ValuesCover
              src={"/images/studio_bullets.jpg"}
              width={1126}
              height={1437}
              alt='studio values'
            />
          </ValuesCoverW>
        </ValuesSection>

        <StudioServices>
          <Large as={"blockquote"}>
            We’re able to cover the client’s needs from strategy and art
            direction to production, design and communication.
          </Large>
          <StudioServiceCover
            src={"/images/studio-hero.jpg"}
            width={2101}
            height={1326}
            alt='studio values'
          />
          <StudioServicesSectionW>
            <ServicesSection areas={areas} />
          </StudioServicesSectionW>
          <StudioShowreelW>
            <Showreel
              asset={{ url: `/videos/steezy-loop.mp4`, _type: "Video" }}
            />
          </StudioShowreelW>
        </StudioServices>

        <BrandsSection>
          <BrandsHeader>
            <HeaderLine>
              <Micro className='uppercase' as={"h2"}>
                {studioStrings.brands.header}
              </Micro>
            </HeaderLine>
          </BrandsHeader>
          <Logotypes>
            {studioStrings.brands.logotypes.map((src, i) => (
              <RevealAnimation key={src} delay={0.05 * i}>
                <Logo src={`/logos/${src}`} />
              </RevealAnimation>
            ))}
          </Logotypes>
        </BrandsSection>
      </StyledStudio>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = getClient();
  try {
    const areasReq = client.query<Query>({ query: GET_ALL_AREAS });
    const latestProjectsReq = client.query<Query>({
      query: GET_LATEST_PROJECTS,
    });
    const [
      {
        data: { Areas: areas },
      },
      {
        data: { FeaturedGrid: latestProjects },
      },
    ] = await Promise.all([areasReq, latestProjectsReq]);

    const enhancedLatestProjects = enhanceProjects(
      latestProjects.featured_projects,
      areas
    );

    return {
      props: { areas, latestProjects: enhancedLatestProjects },
      revalidate: Number(process.env.REVALIDATE),
    };
  } catch (e) {
    return {
      props: { areas: null },
      revalidate: Number(process.env.REVALIDATE),
    };
  }
};
export default Studio;
