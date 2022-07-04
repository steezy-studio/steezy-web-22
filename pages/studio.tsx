import { GetStaticProps } from "next";
import React from "react";
import client from "../apollo/client";
import Hero from "../components/Hero/Hero";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import Img from "../components/Img/Img";
import Layout from "../components/Layout/Layout";
import { StyledLink } from "../components/Link/Styles/StyledLink";
import Navbar from "../components/Navbar/Navbar";
import { Caption } from "../components/Typo/Caption";
import { Header } from "../components/Typo/Header";
import { MainHeader } from "../components/Typo/MainHeader";
import { Paragraph } from "../components/Typo/Paragraph";
import { Perex } from "../components/Typo/Perex";
import strings from "../data/strings";
import { Areas } from "../generated/types";
import { GET_ALL_AREAS } from "../graphql/GetAllAreas";
import {
  Order,
  StyledStudio,
  TextBlock,
  ValueHeader,
  ValueItem,
  ValuesList,
  ValuesInner,
  ValuesSection,
  ServicesSection,
  ServicesList,
  SubServicesList,
  BlockquoteSection,
  Blockquote,
  Quote,
  BrandsSection,
  BrandsText,
  Logo,
  Logotypes,
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
            header={studioStrings.hero.header.rest}
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
              <Caption className={"with-dash"}>
                {studioStrings.intro.header}
              </Caption>
              <Perex>{studioStrings.intro.perex}</Perex>
            </div>
            <Paragraph>{studioStrings.intro.paragraph}</Paragraph>
          </TextBlock>
          <Img
            src={`/images/steezy_interier-04.jpg`}
            width={2450}
            height={1300}
            layout={`responsive`}
          />
          <ValuesSection>
            <ValuesInner>
              <Caption className='with-dash'>
                {studioStrings.values.header}
              </Caption>
              <ValuesList>
                {studioStrings.values.list.map(({ header, perex }, i) => {
                  const n = i + 1;
                  return (
                    <ValueItem key={i}>
                      <Order>{n < 10 ? `0${n}` : n}</Order>
                      <ValueHeader>
                        <Header>{header}</Header>
                        <Perex>{perex}</Perex>
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
            <Caption className='with-dash'>
              {studioStrings.services.header}
            </Caption>
            <ServicesList>
              {studioStrings.services.servicesList.map(
                ({ header, servicesSubList }) => (
                  <div key={header}>
                    <Header>{header}</Header>
                    <SubServicesList>
                      {servicesSubList.map((subService) => (
                        <StyledLink key={subService}>{subService}</StyledLink>
                      ))}
                    </SubServicesList>
                  </div>
                )
              )}
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
                <MainHeader className='offset-x-1'>
                  {studioStrings.blockquotes[0].quote}
                </MainHeader>
                <Caption className='with-dash reversed'>
                  {studioStrings.blockquotes[0].name}{" "}
                </Caption>
                <Caption className='lowcase dash-margin'>
                  {studioStrings.blockquotes[0].position}
                </Caption>
              </Quote>
            </Blockquote>
            <Blockquote>
              <Quote className='offset-y-2'>
                <MainHeader className='offset-x-2'>
                  {studioStrings.blockquotes[1].quote}
                </MainHeader>
                <Caption className='with-dash reversed'>
                  {studioStrings.blockquotes[1].name}{" "}
                </Caption>
                <Caption className='lowcase dash-margin'>
                  {studioStrings.blockquotes[1].position}
                </Caption>
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
              <Caption className='with-dash'>
                {studioStrings.breands.header}
              </Caption>
              <div>
                <Header>{studioStrings.breands.claim}</Header>
                <Paragraph>{studioStrings.breands.perex}</Paragraph>
              </div>
            </BrandsText>
            <Logotypes>
              {studioStrings.breands.logotypes.map((src) => (
                <Logo key={src} src={`/logos/${src}`} />
              ))}
            </Logotypes>
          </BrandsSection>
        </StyledStudio>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await client.query({ query: GET_ALL_AREAS });

    return {
      props: {
        areas: data.data.Areas,
      },
      revalidate: Number(process.env.REVALIDATE),
    };
  } catch (e) {
    return {
      props: {
        areas: null,
      },
      revalidate: Number(process.env.REVALIDATE),
    };
  }
};
export default Studio;
