import { GetStaticProps } from "next";
import getClient from "../apollo/client";
import AutoSlider from "../components/AutoSlider/AutoSlider";
import ClientQuote from "../components/ClientQuote/ClientQuote";
import Head from "../components/Head/Head";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import ProjectsGrid from "../components/ProjectsGrid/ProjectsGrid";
import ProjectsSlider from "../components/ProjectsSlider/ProjectsSlider";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import { Micro } from "../components/Typo/Micro";
import strings from "../data/strings";
import { Areas, Query } from "../generated/preprTypes";
import { GET_LANDINGPAGE } from "../graphql/GetLandingpage";
import { EnhancedProject, enhanceProjects } from "../helpers/enhanceProjects";
import {
  FeaturedGrid,
  HeroFooter,
  IndexApparel,
  IndexApparelGrid,
  IndexGrid,
  IndexHeroSection,
  IndexLatestProjects,
  IndexQuotesSlider,
  IndexServices,
  LandingHeroPageLogotypes,
  LandingPageHeroLogotype,
  StyledIndex,
} from "../pagestyles/StyledIndex";
import {
  MediaImage,
  ProductConnection,
  QueryRoot,
  QueryRootProductsArgs,
} from "../generated/shopifyTypes";
import { GET_PRODUCTS } from "../graphql/GetProducts";
import { indetifiers } from "../helpers/consts";
import ProductCard from "../components/ProductCard/ProductCard";

interface indexProps {
  projects: EnhancedProject[];
  latestProjects: EnhancedProject[];
  areas: Areas;
  products: ProductConnection;
}

const Index = ({ projects, areas, latestProjects, products }: indexProps) => {
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
          <ProjectsSlider
            header='Latest projects'
            linkText={"All projects"}
            url={"/projects/all-projects"}
            projects={latestProjects}
          />
        </IndexLatestProjects>

        <IndexQuotesSlider>
          <AutoSlider
            interval={5000}
            list={[
              `„I appreciate the creative approach, multi-dimensional overlap and fast & transparent communication with steezy.studio“`,
              `„I appreciate the creative approach, multi-dimensional overlap and fast & transparent communication with steezy.studio“`,
              `„I appreciate the creative approach, multi-dimensional overlap and fast & transparent communication with steezy.studio“`,
            ].map((text, j, a) => {
              return (
                <ClientQuote
                  key={j}
                  quote={text}
                  clientName='John Doe'
                  clientRole='CEO'
                />
              );
            })}
          />
        </IndexQuotesSlider>
        <FeaturedGrid>
          <SectionHeader
            header='Featured projects'
            url='/projects/all-projects'
            linkText='all projects'
          />
          <IndexGrid>
            <ProjectsGrid projects={projects} />
          </IndexGrid>
        </FeaturedGrid>
        <IndexApparel>
          <SectionHeader
            header='Steezy apparel'
            url='/apparel'
            linkText='Whole collection'
          />
          <IndexApparelGrid>
            {products.nodes.map(
              (
                { title, metafields, priceRange, availableForSale, handle },
                i
              ) => {
                const _metafields = metafields || [];
                const gridImageRef = _metafields.find(
                  (metafield) => metafield?.key === "grid_image"
                );
                const gridImageHoverRef = _metafields.find(
                  (metafield) => metafield?.key === "grid_image_hover"
                );
                const gridImage = (gridImageRef?.reference as MediaImage).image;
                const gridImageHover =
                  (gridImageHoverRef?.reference as MediaImage)?.image || null;
                return (
                  <ProductCard
                    key={handle}
                    title={title}
                    slug={handle}
                    availableForSale={availableForSale}
                    price={priceRange.minVariantPrice}
                    hoverCover={
                      gridImageHover
                        ? {
                            src: gridImageHover.url,
                            alt: title,
                            width: gridImageHover.width,
                            height: gridImageHover.height,
                          }
                        : null
                    }
                    cover={{
                      src: gridImage?.url || "",
                      alt: title,
                      width: gridImage?.width,
                      height: gridImage?.height,
                    }}
                  />
                );
              }
            )}
          </IndexApparelGrid>
        </IndexApparel>
        <IndexServices>
          <ServicesSection areas={areas} />
        </IndexServices>
        {/* <InstagramFeed images={null} /> */}
      </StyledIndex>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const preprClient = getClient();
  const shopifyClient = getClient("shopify");

  const {
    data: { products },
  } = await shopifyClient.query<QueryRoot>({
    query: GET_PRODUCTS,
    variables: {
      first: 4,
      variantsFirst2: 99,
      transform: {
        maxWidth: null,
        maxHeight: null,
        preferredContentType: "WEBP",
      },
      imagesFirst2: 99,
      identifiers: indetifiers,
    } as QueryRootProductsArgs,
  });

  const {
    data: {
      FeaturedGrid: featuredGrid,
      Projects: latestProjects,
      Areas: areas,
    },
  } = await preprClient.query<Query>({
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
      products,
    },
    revalidate: Number(process.env.REVALIDATE),
  };
};

export default Index;
