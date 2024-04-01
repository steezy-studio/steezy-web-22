import { ProductProvider, useCart } from "@shopify/hydrogen-react";
import {
  CartLineInput,
  QueryRoot,
} from "@shopify/hydrogen-react/storefront-api-types";
import { GetStaticPaths, GetStaticProps } from "next";
import getClient from "../../apollo/client";
import QuantitySelect from "../../components/Inputs/QuantitySelect";
import Link from "../../components/Link/Link";
import Navbar from "../../components/Navbar/Navbar";
import ProjectsSlider from "../../components/ProjectsSlider/ProjectsSlider";
import { Large } from "../../components/Typo/Large";
import { Medium } from "../../components/Typo/Medium";
import { Small } from "../../components/Typo/Small";
import Video from "../../components/Video/Video";
import { Areas, Query, QueryProjectsArgs } from "../../generated/preprTypes";
import { Product, Video as VideoType } from "../../generated/shopifyTypes";
import { GET_ALL_AREAS } from "../../graphql/GetAllAreas";
import { GET_PROJECTS } from "../../graphql/GetAllProjects";
import { GET_PRODUCT } from "../../graphql/GetProduct";
import { GET_PRODUCTS_HANDLES } from "../../graphql/GetProductsHandles";
import { indetifiers } from "../../helpers/consts";
import {
  EnhancedProject,
  enhanceProjects,
} from "../../helpers/enhanceProjects";
import { formatPrice } from "../../helpers/formatPrice";
import {
  ProductGallery,
  ProductGalleryImg,
  ProductInfo,
  ProductOptions,
  ProductProjects,
  ProductSection,
  ProductText,
  StyledProduct,
} from "../../pagestyles/StyledProduct";
import { useState } from "react";
import VariantsSelect from "../../components/Inputs/VariantsSelect";
import Head from "../../components/Head/Head";

interface productProps {
  areas: Areas;
  projects: EnhancedProject[];
  product: Product;
}

const product = ({ areas, projects, product }: productProps) => {
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
        ogImageSrc={""}
      />
      <ProductProvider data={product}>
        <StyledProduct>
          <Navbar areas={areas.items} header={product.title} />
          <ProductSection>
            <ProductGallery>
              {video && (
                <Video
                  src={video.sources.find(({ format }) => format === "mp4").url}
                />
              )}
              {product.images.nodes.map(({ url, width, height }, i) => (
                <ProductGalleryImg
                  key={i}
                  src={url}
                  alt={product.title}
                  height={height}
                  width={width}
                />
              ))}
            </ProductGallery>
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
          <ProductProjects>
            <ProjectsSlider
              projects={projects}
              header='See also our client work'
              linkText={"All projects"}
              url='/projects/all-projects'
            />
          </ProductProjects>
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
    data: { Projects: projects },
  } = await preprClient.query<Query>({
    query: GET_PROJECTS,
    variables: {
      limit: 10,
    } as QueryProjectsArgs,
  });

  return {
    props: { areas, product, projects: enhanceProjects(projects.items, areas) },
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
