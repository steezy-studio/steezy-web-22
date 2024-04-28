import { ProductProvider, useCart } from "@shopify/hydrogen-react";
import {
  CartLineInput,
  Product,
  ProductConnection,
  QueryRoot,
  QueryRootProductsArgs,
  Video as VideoType,
} from "@shopify/hydrogen-react/storefront-api-types";
import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";
import getClient from "../../apollo/client";
import Head from "../../components/Head/Head";
import QuantitySelect from "../../components/Inputs/QuantitySelect";
import VariantsSelect from "../../components/Inputs/VariantsSelect";
import Link from "../../components/Link/Link";
import Navbar from "../../components/Navbar/Navbar";
import ProjectsSlider from "../../components/ProjectsSlider/ProjectsSlider";
import RevealAnimation from "../../components/RevealAnimation/RevealAnimation";
import { Large } from "../../components/Typo/Large";
import { Medium } from "../../components/Typo/Medium";
import { Small } from "../../components/Typo/Small";
import Video from "../../components/Video/Video";
import { Areas, Query, QueryProjectsArgs } from "../../generated/preprTypes";
import { GET_ALL_AREAS } from "../../graphql/GetAllAreas";
import { GET_PROJECTS } from "../../graphql/GetAllProjects";
import { GET_PRODUCT } from "../../graphql/GetProduct";
import { GET_PRODUCTS } from "../../graphql/GetProducts";
import { GET_PRODUCTS_HANDLES } from "../../graphql/GetProductsHandles";
import { indetifiers } from "../../helpers/consts";
import {
  EnhancedProject,
  enhanceProjects,
} from "../../helpers/enhanceProjects";
import { formatPrice } from "../../helpers/formatPrice";
import {
  ProductFeaturedProducts,
  ProductFeaturedProjects,
  ProductHeroVideo,
  ProductGalleryGrid,
  ProductGalleryImg,
  ProductInfo,
  ProductOptions,
  ProductSection,
  ProductText,
  StyledProduct,
} from "../../pagestyles/StyledProduct";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

interface productProps {
  areas: Areas;
  projects: EnhancedProject[];
  product: Product;
  featuredProducts: ProductConnection;
}

const product = ({
  areas,
  projects,
  product,
  featuredProducts,
}: productProps) => {
  const { linesAdd, status, lines } = useCart();
  const [productVariant, setproductVariant] = useState<CartLineInput>({
    merchandiseId: product.variants.nodes[0].id,
    quantity: 1,
  });

  const video = product.metafields.find((mf) => mf?.key === "product_video")
    .reference as VideoType;

  return (
    <>
      <Head
        pageName={[`Apparel`, product.title]}
        ogDescription={product.description}
        ogTitle={product.title}
        ogImageSrc={product.images.nodes[0].url}
      />
      <ProductProvider data={product}>
        <StyledProduct>
          <Navbar areas={areas.items} header={product.title} />
          <ProductSection>
            <ProductHeroVideo>
              {video && (
                <Video
                  src={video.sources.find(({ format }) => format === "mp4").url}
                />
              )}
            </ProductHeroVideo>
            <ProductInfo>
              <ProductText>
                <Medium className='medium'>{product.title}</Medium>
                <Large>
                  {formatPrice(
                    product.priceRange.maxVariantPrice.amount,
                    product.priceRange.maxVariantPrice.currencyCode
                  )}
                </Large>
                <div>
                  <Small>Tax included</Small>
                  <Small>Shipping only in Czechia</Small>
                </div>
              </ProductText>
              <ProductOptions>
                <VariantsSelect
                  variants={product.variants}
                  onChange={(id) =>
                    setproductVariant((p) => ({
                      ...p,
                      merchandiseId: id,
                    }))
                  }
                />
                <QuantitySelect
                  quantityAvaible={
                    product.variants.nodes.find(
                      (x) => x.id === productVariant.merchandiseId
                    ).quantityAvailable
                  }
                  onQuantityChange={(val) => {
                    setproductVariant((p) => ({ ...p, quantity: val }));
                  }}
                />
              </ProductOptions>
              <Large>
                <Link
                  href={""}
                  onClick={() => {
                    linesAdd([productVariant]);
                  }}
                >
                  add to cart
                </Link>
              </Large>
            </ProductInfo>
          </ProductSection>
          <ProductGalleryGrid>
            {product.images.nodes.map(({ url, width, height }, i) => (
              <RevealAnimation>
                <ProductGalleryImg
                  key={i}
                  src={url}
                  alt={product.title}
                  height={height}
                  width={width}
                />
              </RevealAnimation>
            ))}
          </ProductGalleryGrid>
          <ProductFeaturedProducts>
            <FeaturedProducts
              products={featuredProducts}
              header='Steezy apparel'
              url='/apparel'
              linkText='Whole collection'
            />
          </ProductFeaturedProducts>
          <ProductFeaturedProjects>
            <ProjectsSlider
              projects={projects}
              header='See also our client work'
              linkText={"All projects"}
              url='/projects/all-projects'
            />
          </ProductFeaturedProjects>
        </StyledProduct>
      </ProductProvider>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const preprClient = getClient("prepr");
  const shopifyClient = getClient("shopify");

  const {
    data: { Areas: areas },
  } = await preprClient.query<Query>({
    query: GET_ALL_AREAS,
  });

  const {
    data: { product },
  } = await shopifyClient.query<QueryRoot>({
    query: GET_PRODUCT,
    variables: {
      handle: params.slug,
      identifiers: indetifiers,
      variantsFirst2: 99,
      imagesFirst2: 99,
    },
  });

  const {
    data: { products: featuredProducts },
  } = await shopifyClient.query<QueryRoot>({
    query: GET_PRODUCTS,
    variables: {
      first: 4,
      variantsFirst2: 4,
      transform: {
        maxWidth: null,
        maxHeight: null,
        preferredContentType: "WEBP",
      },
      imagesFirst2: 1,
      identifiers: indetifiers,
      query: `NOT title:'${product.title}'`,
    } as QueryRootProductsArgs,
  });

  const {
    data: { Projects: projects },
  } = await preprClient.query<Query>({
    query: GET_PROJECTS,
    variables: {
      limit: 10,
    } as QueryProjectsArgs,
  });

  return {
    props: {
      areas,
      product,
      projects: enhanceProjects(projects.items, areas),
      featuredProducts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const shopifyClient = getClient("shopify");
  const {
    data: { products },
  } = await shopifyClient.query<QueryRoot>({
    query: GET_PRODUCTS_HANDLES,
    variables: {
      first: 99,
    },
  });

  const paths = products.nodes.map(({ handle }) => ({
    params: { slug: handle },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export default product;
