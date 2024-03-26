import { GetStaticProps } from "next";
import { useState } from "react";
import { useTheme } from "styled-components";
import getClient from "../apollo/client";
import Animation from "../components/Animation/Animation";
import Head from "../components/Head/Head";
import Hero from "../components/Hero/Hero";
import Img from "../components/Img/Img";
import Navbar from "../components/Navbar/Navbar";
import { Large } from "../components/Typo/Large";
import { Medium } from "../components/Typo/Medium";
import { Micro } from "../components/Typo/Micro";
import { Small } from "../components/Typo/Small";
import ValueItem from "../components/ValueItem";
import strings from "../data/strings";
import { Areas } from "../generated/types";
import { GET_ALL_AREAS } from "../graphql/GetAllAreas";
import { useWindowSize } from "../hooks/useWindowSize";
import {
  Blockquote,
  BlockquoteSection,
  BrandsSection,
  BrandsText,
  BrandsTextInner,
  DividerPhoto,
  HeaderWithDashOffset,
  Logo,
  Logotypes,
  Outro,
  Quote,
  StyledStudio,
  TextBlock,
  TextBlockBody,
  TextBlockHeader,
  ValuesCover,
  ValuesCoverInner,
  ValuesList,
  ValuesSection,
} from "../pagestyles/StyledStudio";

interface StudioProps {
  areas: Areas;
}

const Studio = ({ areas }: StudioProps) => {
  const studioStrings = strings.studioPage;
  const [focusedValue, setFocusedValue] = useState(0);

  const theme = useTheme();

  const { w } = useWindowSize();
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
        <Hero
          asset={{
            url: `/images/studio/studio_1.jpg`,
            _type: `Image`,
            width: 1920,
            height: 1211,
          }}
        />
        <Animation type='fadeFromBottom'>
          <TextBlock>
            <TextBlockHeader>
              <Micro className={"with-dash"}>
                {studioStrings.intro.header}
              </Micro>
              <Medium className='big'>{studioStrings.intro.perex}</Medium>
            </TextBlockHeader>
            <TextBlockBody>
              <Small>{studioStrings.intro.paragraph}</Small>
            </TextBlockBody>
          </TextBlock>
        </Animation>

        <Animation type='fadeFromBottom'>
          <DividerPhoto>
            <Img
              src={"/images/studio/studio_2.jpg"}
              width={2450}
              height={1300}
              alt={"studio"}
            />
          </DividerPhoto>
        </Animation>

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
          <ValuesCover
            data-scroll
            data-scroll-sticky
            data-scroll-target='#values-section'
            data-scroll-offset={`${
              -1 *
              (Number(theme.pageMargin.split("px")[0]) * 2 +
                Number(theme.navbarHeight.split("px")[0]))
            }px,0%`}
          >
            <ValuesCoverInner>
              {/* <Video src={"/videos/loop_studio.mp4"} /> */}
              <Img
                src={"/images/studio/studio_3.jpg"}
                width={1126}
                height={1437}
                alt='studio values'
              />
            </ValuesCoverInner>
          </ValuesCover>
        </ValuesSection>
        {/* <Animation type='fadeFromBottom'>
          <ImageSlider
            imgList={strings.studioPage.slider.map((img, i) => ({
              layout: "responsive",
              priority: true,
              width: 689,
              height: 800,
              src: `/images/studio/${img.src}`,
              id: String(i),
              alt: "studio",
            }))}
          />
        </Animation> */}

        <BlockquoteSection>
          <Blockquote className='_1'>
            <Img
              src={"/images/studio/studio_4.jpg"}
              width={1200}
              height={1510}
              alt={"studio"}
            />

            <Quote className='offset-y-1' data-scroll data-scroll-speed='2'>
              <Large className='offset-x-1'>
                {studioStrings.blockquotes[0].quote}
              </Large>
              <Micro className='with-dash reversed'>
                {studioStrings.blockquotes[0].name}{" "}
              </Micro>
              <Micro className='lowcase dash-margin '>
                {studioStrings.blockquotes[0].position}
              </Micro>
            </Quote>
          </Blockquote>
          <Blockquote className='_2'>
            <Quote className='offset-y-2' data-scroll data-scroll-speed='2'>
              <Large className='offset-x-2'>
                {studioStrings.blockquotes[1].quote}
              </Large>
              <Micro className='with-dash dash-margin'>
                {studioStrings.blockquotes[1].name}
              </Micro>
              <Micro className='lowcase dash-margin'>
                {studioStrings.blockquotes[1].position}
              </Micro>
            </Quote>

            <Img
              src={"/images/studio/studio_5.jpg"}
              width={1200}
              height={1200}
              alt='studio'
            />
          </Blockquote>
        </BlockquoteSection>
        <BrandsSection>
          <Animation type='fadeFromBottom'>
            <BrandsText>
              <HeaderWithDashOffset>
                <Micro className='with-dash'>
                  {studioStrings.brands.header}
                </Micro>
              </HeaderWithDashOffset>
              <BrandsTextInner>
                <Medium className='big'>{studioStrings.brands.claim}</Medium>
                <Small>{studioStrings.brands.perex}</Small>
              </BrandsTextInner>
            </BrandsText>
          </Animation>

          <Logotypes>
            {studioStrings.brands.logotypes.map((src, i) => (
              <Animation type='fadeFromBottom' key={src} delay={0.05 * i}>
                <Logo src={`/logos/${src}`} />
              </Animation>
            ))}
          </Logotypes>
        </BrandsSection>
        <Outro>
          <Blockquote className='_3'>
            <Quote className='offset-y-3' data-scroll data-scroll-speed='2'>
              <Large className='offset-x-2'>
                {studioStrings.blockquotes[2].quote}
              </Large>
              <Micro className='with-dash reversed'>
                {studioStrings.blockquotes[2].name}{" "}
              </Micro>
              <Micro className='lowcase dash-margin'>
                {studioStrings.blockquotes[2].position}
              </Micro>
            </Quote>
          </Blockquote>

          <Img
            src={`/images/studio/studio_6.jpg`}
            width={2450}
            height={1300}
            alt='studio'
          />
        </Outro>
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
