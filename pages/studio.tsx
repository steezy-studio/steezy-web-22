import { GetStaticProps } from "next";
import { useState } from "react";
import getClient from "../apollo/client";
import Head from "../components/Head/Head";
import HeaderLine from "../components/HeaderLine/HeaderLine";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import RevealAnimation from "../components/RevealAnimation/RevealAnimation";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import Slider from "../components/Slider/Slider";
import { Large } from "../components/Typo/Large";
import { Medium } from "../components/Typo/Medium";
import { Micro } from "../components/Typo/Micro";
import { Small } from "../components/Typo/Small";
import ValueItem from "../components/ValueItem";
import strings from "../data/strings";
import { Areas } from "../generated/preprTypes";
import { GET_ALL_AREAS } from "../graphql/GetAllAreas";
import {
  BrandsHeader,
  BrandsSection,
  Logo,
  Logotypes,
  OurStudio,
  OurStudioSliderImg,
  StudioHero,
  StudioServiceCover,
  StudioServices,
  StudioServicesSectionW,
  StyledStudio,
  TextBlock,
  TextBlockBody,
  TextBlockHeader,
  ValuesCover,
  ValuesCoverW,
  ValuesList,
  ValuesSection,
} from "../pagestyles/StyledStudio";
import { device } from "../helpers/consts";

interface StudioProps {
  areas: Areas;
}

const Studio = ({ areas }: StudioProps) => {
  const studioStrings = strings.studioPage;
  const [focusedValue, setFocusedValue] = useState(0);

  return (
    <>
      <Head
        pageName={studioStrings.head.pageName}
        ogDescription={studioStrings.hero.subHeader}
        ogImageSrc={`/images/studio/studio_1.jpg`}
        ogTitle={studioStrings.hero.header.rest}
      />
      <Navbar areas={areas?.items} header={studioStrings.navbar.header} />

      <StyledStudio>
        <StudioHero>
          <Large>
            We're creative house building strong visual identities and
            strategies behind inspiring brands.
          </Large>
          <Hero asset={{ url: `/videos/steezy-loop.mp4`, _type: "Video" }} />
        </StudioHero>
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

        <OurStudio>
          <Slider
            config={{
              [device.monitor]: { step: 2 },
              [device.phone]: { step: 1 },
              [device.largeNotebook]: { step: 2 },
            }}
          >
            {studioStrings.slider.map((img, i) => (
              <OurStudioSliderImg
                key={i}
                src={`/images/studio/${img.src}`}
                width={img.height}
                height={img.width}
                alt='studio'
              />
            ))}
          </Slider>
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
    const data = await client.query({ query: GET_ALL_AREAS });
    return {
      props: { areas: data.data.Areas },
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
