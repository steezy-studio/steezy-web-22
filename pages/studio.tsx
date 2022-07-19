import { GetStaticProps } from "next";
import client from "../apollo/client";
import Hero from "../components/Hero/Hero";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import Img from "../components/Img/Img";
import Layout from "../components/Layout/Layout";
import Link from "../components/Link/Link";
import Navbar from "../components/Navbar/Navbar";
import { Large } from "../components/Typo/Large";
import { Medium } from "../components/Typo/Medium";
import { Micro } from "../components/Typo/Micro";
import { Small } from "../components/Typo/Small";
import strings from "../data/strings";
import { Areas } from "../generated/types";
import { GET_ALL_AREAS } from "../graphql/GetAllAreas";
import {
  Blockquote,
  BlockquoteSection,
  BrandsSection,
  BrandsText,
  Logo,
  Logotypes,
  Order,
  Outro,
  Quote,
  ServicesList,
  ServicesSection,
  StyledStudio,
  SubServicesList,
  TextBlock,
  ValueHeader,
  ValueItem,
  ValuesInner,
  ValuesList,
  ValuesSection,
} from "../pagestyles/StyledStudio";

interface StudioProps {
  areas: Areas;
}

const Studio = ({ areas }: StudioProps) => {
  const studioStrings = strings.studioPage;
  return (
    <>
      <Navbar
        areas={areas?.items.map(({ area_name, _slug }) => ({
          highlighted: false,
          link: `/projects/${_slug}`,
          name: area_name,
        }))}
      />
      <Layout>
        <StyledStudio>
          <Hero
            header={() => studioStrings.hero.header.rest}
            perex={studioStrings.hero.subHeader}
            asset={{
              url: `/images/studio-hero.jpg`,
              _type: `Image`,
              width: 1920,
              height: 1211,
            }}
          />
          <TextBlock>
            <div className='header'>
              <Micro className={"with-dash"}>
                {studioStrings.intro.header}
              </Micro>
              <Medium className='big'>{studioStrings.intro.perex}</Medium>
            </div>
            <Small>{studioStrings.intro.paragraph}</Small>
          </TextBlock>
          <Img
            src={`/images/steezy_interier-04.jpg`}
            width={2450}
            height={1300}
            layout={`responsive`}
          />
          <ValuesSection>
            <ValuesInner>
              <Micro className='with-dash'>{studioStrings.values.header}</Micro>
              <ValuesList>
                {studioStrings.values.list.map(({ header, perex }, i) => {
                  const n = i + 1;
                  return (
                    <ValueItem key={i}>
                      <Order>{n < 10 ? `0${n}` : n}</Order>
                      <ValueHeader>
                        <Medium className='big'>{header}</Medium>
                        <Small className='big-lh'>{perex}</Small>
                      </ValueHeader>
                    </ValueItem>
                  );
                })}
              </ValuesList>
            </ValuesInner>
            <Img
              src={`/images/steezy_interier-08.jpg`}
              width={1100}
              height={1100}
              layout={`responsive`}
            />
          </ValuesSection>
          <ImageSlider
            imgList={strings.studioPage.slider.map((img) => ({
              layout: "responsive",
              width: 1200,
              height: 950,
              src: `/images/${img.src}`,
            }))}
          />
          <ServicesSection>
            <Micro className='with-dash'>{studioStrings.services.header}</Micro>
            <ServicesList>
              {areas.items.map(({ sub_areas, area_name, _slug }) => (
                <div key={area_name}>
                  <Medium className='big'>
                    <Link href={`/projects/${_slug}`}>{area_name}</Link>
                  </Medium>
                  <SubServicesList>
                    <Medium>{sub_areas}</Medium>
                  </SubServicesList>
                </div>
              ))}
            </ServicesList>
          </ServicesSection>
          <BlockquoteSection>
            <Blockquote className='_1'>
              <Img
                src={"/images/blockquote-01.jpg"}
                width={1200}
                height={1200}
                layout={"intrinsic"}
              />
              <Quote className='offset-y-1'>
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
              <Quote className='offset-y-2'>
                <Large className='offset-x-2'>
                  {studioStrings.blockquotes[1].quote}
                </Large>
                <Micro className='with-dash dash-margin'>
                  {studioStrings.blockquotes[1].name}{" "}
                </Micro>
                <Micro className='lowcase dash-margin'>
                  {studioStrings.blockquotes[1].position}
                </Micro>
              </Quote>
              <Img
                src={"/images/blockquote-02.jpg"}
                width={1200}
                height={1200}
                layout={"intrinsic"}
              />
            </Blockquote>
          </BlockquoteSection>
          <BrandsSection>
            <BrandsText>
              <Micro className='with-dash'>{studioStrings.brands.header}</Micro>
              <div>
                <Medium className='big'>{studioStrings.brands.claim}</Medium>
                <Small>{studioStrings.brands.perex}</Small>
              </div>
            </BrandsText>
            <Logotypes>
              {studioStrings.brands.logotypes.map((src) => (
                <Logo key={src} src={`/logos/${src}`} />
              ))}
            </Logotypes>
          </BrandsSection>
          <Outro>
            <Blockquote>
              <Quote className='offset-y-3'>
                <Large className='offset-x-2'>
                  {studioStrings.blockquotes[1].quote}
                </Large>
                <Micro className='with-dash reversed'>
                  {studioStrings.blockquotes[1].name}{" "}
                </Micro>
                <Micro className='lowcase dash-margin'>
                  {studioStrings.blockquotes[1].position}
                </Micro>
              </Quote>
            </Blockquote>
            <Img
              src={`/images/blockquote-03.jpg`}
              width={2450}
              height={1300}
              layout={`responsive`}
            />
          </Outro>
        </StyledStudio>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
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
