import { GetStaticProps } from "next";
import { useContext, useEffect, useState } from "react";
import getClient from "../apollo/client";
import { CursorContext } from "../components/Cursor/CursorProvider";
import Head from "../components/Head/Head";
import HeaderLine from "../components/HeaderLine/HeaderLine";
import Marquee from "../components/Marquee/Marquee";
import { NavbarContext } from "../components/Navbar/NavbarControls";
import ProjectsSlider from "../components/ProjectsSlider/ProjectsSlider";
import RevealAnimation from "../components/RevealAnimation/RevealAnimation";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import Showreel from "../components/Showreel/Showreel";
import { Large } from "../components/Typo/Large";
import { Medium } from "../components/Typo/Medium";
import { Micro } from "../components/Typo/Micro";
import { Small } from "../components/Typo/Small";
import ValueItem from "../components/ValueItem";
import strings from "../data/strings";
import { Areas, Query } from "../generated/preprTypes";
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
  ValuesList,
  ValuesSection,
} from "../pagestyles/StyledStudio";

interface StudioProps {
  areas: Areas;
  latestProjects: EnhancedProject[];
}

const Studio = ({ areas, latestProjects }: StudioProps) => {
  const studioStrings = strings.studioPage;
  const [focusedValue, setFocusedValue] = useState(0);
  const { setCursorType } = useContext(CursorContext);
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
            strategies behind inspiring brands.
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
                <Micro>{studioStrings.intro.header}</Micro>
              </HeaderLine>
              <Medium className='medium'>{studioStrings.intro.perex}</Medium>
            </TextBlockHeader>
            <TextBlockBody>
              <Small>{studioStrings.intro.paragraph}</Small>
            </TextBlockBody>
          </TextBlock>
        </RevealAnimation>

        <OurStudio
          onMouseEnter={() => setCursorType("swipe")}
          onMouseLeave={() => setCursorType("normal")}
        >
          <Marquee useDragVelocity speedMultiplier={0.1} stopOnHover>
            {studioStrings.slider.map((img, i) => (
              <OurStudioSliderImg
                draggable={false}
                key={i}
                src={`/images/studio/${img.src}`}
                width={img.height}
                height={img.width}
                alt='studio'
              />
            ))}
          </Marquee>
        </OurStudio>

        <ValuesSection id='values-section'>
          <ValuesList>
            {studioStrings.values.list.map(({ header, perex }, i) => {
              const n = i + 1;
              return (
                <ValueItem
                  onFocusChange={(id) => setFocusedValue(id)}
                  isFocused={focusedValue === i}
                  id={i}
                  order={i}
                  header={header}
                  perex={perex}
                  key={i}
                />
              );
            })}
          </ValuesList>
          <ValuesCoverW>
            <ValuesCover
              src={"/images/studio/studio_3.jpg"}
              width={1126}
              height={1437}
              alt='studio values'
            />
          </ValuesCoverW>
        </ValuesSection>

        <StudioServices>
          <Large>
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
              <Micro>{studioStrings.brands.header}</Micro>
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
