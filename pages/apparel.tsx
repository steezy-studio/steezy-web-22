import { GetStaticProps } from "next";
import getClient from "../apollo/client";
import Navbar from "../components/Navbar/Navbar";
import ProductCard from "../components/ProductCard/ProductCard";
import ProjectsSlider from "../components/ProjectsSlider/ProjectsSlider";
import { Medium } from "../components/Typo/Medium";
import { Areas, Query, QueryProjectsArgs } from "../generated/preprTypes";
import {
  MediaImage,
  ProductConnection,
  QueryRoot,
  QueryRootProductsArgs,
} from "../generated/shopifyTypes";
import { GET_ALL_AREAS } from "../graphql/GetAllAreas";
import { GET_PROJECTS } from "../graphql/GetAllProjects";
import { GET_PRODUCTS } from "../graphql/GetProducts";
import { EnhancedProject, enhanceProjects } from "../helpers/enhanceProjects";
import {
  ApparelOtherProjects,
  ProductsGrid,
  ProductsGridSection,
  StyledApparel,
} from "../pagestyles/StyledApparel";

interface apparelProps {
  products: ProductConnection;
  areas: Areas;
  projects: EnhancedProject[];
}

const apparel = ({ products, areas, projects }: apparelProps) => {
  return (
    <StyledApparel>
      <Navbar areas={areas.items} header='steezy apparel' />
      <ProductsGridSection>
        <Medium className='medium'>Spring/Summer 2024</Medium>
        <ProductsGrid>
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
        </ProductsGrid>
      </ProductsGridSection>

      <ApparelOtherProjects>
        <ProjectsSlider
          projects={projects}
          header='See also our client work'
          linkText={"All projects"}
          url='/projects/all-projects'
        />
      </ApparelOtherProjects>
    </StyledApparel>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const preprClient = getClient("prepr");
  const {
    data: { Areas: areas },
  } = await preprClient.query<Query>({
    query: GET_ALL_AREAS,
  });
  const {
    data: { Projects: projects },
  } = await preprClient.query<Query>({
    query: GET_PROJECTS,
    variables: {
      limit: 10,
    } as QueryProjectsArgs,
  });

  const shopifyClient = getClient("shopify");
  const {
    data: { products },
  } = await shopifyClient.query<QueryRoot>({
    query: GET_PRODUCTS,
    variables: {
      first: 99,
      variantsFirst2: 99,
      transform: {
        maxWidth: null,
        maxHeight: null,
        preferredContentType: "WEBP",
      },
      imagesFirst2: 99,
      identifiers: [
        {
          namespace: "custom",
          key: "grid_image",
        },
        {
          namespace: "custom",
          key: "grid_image_hover",
        },
        {
          namespace: "custom",
          key: "product_video",
        },
      ],
    } as QueryRootProductsArgs,
  });

  return {
    props: {
      products,
      areas,
      projects: enhanceProjects(projects.items, areas),
    },
    revalidate: Number(process.env.REVALIDATE),
  };
};

export default apparel;
