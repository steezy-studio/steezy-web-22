import {
  ProductConnection,
  QueryRoot,
  QueryRootProductsArgs,
} from "@shopify/hydrogen-react/storefront-api-types";
import { GetStaticProps } from "next";
import { useContext, useEffect } from "react";
import getClient from "../apollo/client";
import AutoSlider from "../components/AutoSlider/AutoSlider";
import ClientQuote from "../components/ClientQuote/ClientQuote";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Head from "../components/Head/Head";
import { NavbarContext } from "../components/Navbar/NavbarControls";
import ProjectsGrid from "../components/ProjectsGrid/ProjectsGrid";
import RevealAnimation from "../components/RevealAnimation/RevealAnimation";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import Showreel from "../components/Showreel/Showreel";
import { Big } from "../components/Typo/Big";
import { Small } from "../components/Typo/Small";
import strings from "../data/strings";
import { Areas, Query } from "../generated/preprTypes";
import { GET_LANDINGPAGE } from "../graphql/GetLandingpage";
import { GET_PRODUCTS } from "../graphql/GetProducts";
import { device, indetifiers } from "../helpers/consts";
import { EnhancedProject, enhanceProjects } from "../helpers/enhanceProjects";
import { useWindowSize } from "../hooks/useWindowSize";
import {
  FeaturedGrid,
  HeroFooter,
  HeroFooterPerex,
  IndexApparel,
  IndexGrid,
  IndexHeroClaim,
  IndexHeroSection,
  IndexQuoteClient,
  IndexServices,
  LandingHeroPageLogotypes,
  LandingPageHeroLogotype,
  StyledIndex,
} from "../pagestyles/StyledIndex";

interface indexProps {
  projects: EnhancedProject[];
  areas: Areas;
  products: ProductConnection;
}

const Index = ({ projects, areas, products }: indexProps) => {
  const landingpageStrings = strings.landingPage;
  const { w } = useWindowSize();
  const { setNavbarHeader } = useContext(NavbarContext);
  useEffect(() => {
    setNavbarHeader(landingpageStrings.navbar.header);
  }, []);

  return (
    <>
      <Head
        ogDescription={landingpageStrings.hero.subHeader}
        ogImageSrc={"/images/studio-hero.jpg"}
        pageName={"STEEZY Studio"}
        ogTitle={"STEEZY Studio"}
      />
      <StyledIndex>
        <IndexHeroSection>
          <IndexHeroClaim>
            <RevealAnimation delay={0.3}>
              <Big>We show the world how great you are</Big>
            </RevealAnimation>
          </IndexHeroClaim>
          <Showreel
            asset={{
              url:
                w <= device.phone
                  ? `/videos/steezy-loop-phone.mp4`
                  : `/videos/steezy-loop.mp4`,
              _type: "Video",
            }}
          />
          <HeroFooter>
            <HeroFooterPerex>
              <Small as='p'>
                We work for world-known brands while sharing our knowledge and
                passion with local start-ups and cultural pioneers.
              </Small>
            </HeroFooterPerex>
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

        <FeaturedGrid>
          <SectionHeader
            header='Featured projects'
            url='/projects/all-projects'
            linkText='All Projects'
          />
          <IndexGrid>
            <ProjectsGrid
              projects={projects}
              projectsPerPage={w <= device.phone ? 5 : 14}
            />
          </IndexGrid>
        </FeaturedGrid>
        <IndexServices>
          <ServicesSection areas={areas} />
        </IndexServices>
        <IndexApparel>
          <FeaturedProducts
            products={products}
            header='Steezy apparel'
            url='/apparel'
            linkText='Whole Collection'
          />
        </IndexApparel>
        <IndexQuoteClient>
          <RevealAnimation>
            <AutoSlider
              interval={5000}
              list={landingpageStrings.quotes.map(
                ({ name, position, quote }, j, a) => {
                  return (
                    <ClientQuote
                      key={j}
                      quote={quote}
                      clientName={name}
                      clientRole={position}
                    />
                  );
                }
              )}
            />
          </RevealAnimation>
        </IndexQuoteClient>
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
    data: { Projects: projects, Areas: areas },
  } = await preprClient.query<Query>({
    query: GET_LANDINGPAGE,
    variables: { sortLatestProjects: "changed_on_DESC" },
  });

  const projectsGrid = enhanceProjects(projects.items, areas);

  return {
    props: {
      areas: areas,
      projects: projectsGrid,
      products,
    },
    revalidate: Number(process.env.REVALIDATE),
  };
};

export default Index;
