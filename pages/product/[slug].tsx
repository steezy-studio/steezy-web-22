import {
  CartLineInput,
  QueryRoot,
} from "@shopify/hydrogen-react/storefront-api-types";
import { GetStaticPaths, GetStaticProps } from "next";
import getClient from "../../apollo/client";
import Navbar from "../../components/Navbar/Navbar";
import ProjectsSlider from "../../components/ProjectsSlider/ProjectsSlider";
import { Medium } from "../../components/Typo/Medium";
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
import {
  ProductGallery,
  ProductGalleryImg,
  ProductInfo,
  ProductSection,
  StyledProduct,
} from "../../pagestyles/StyledProduct";
import { useCart } from "@shopify/hydrogen-react";
import { Large } from "../../components/Typo/Large";
import { formatPrice } from "../../helpers/formatPrice";
import { Small } from "../../components/Typo/Small";
import Video from "../../components/Video/Video";

interface productProps {
  areas: Areas;
  projects: EnhancedProject[];
  product: Product;
}

const product = ({ areas, projects, product }: productProps) => {
  const { linesAdd, status, lines } = useCart();

  const merchandise: CartLineInput = {
    merchandiseId: product.variants.nodes[0].id,
    quantity: 1,
  };
  const video = product.metafields.find(({ key }) => key === "product_video")
    .reference as VideoType;

  console.log(product.metafields, video);

  return (
    <StyledProduct>
      <Navbar areas={areas.items} header={product.title} />
      <ProductSection>
        <ProductGallery>
          <Video
            src={video.sources.find(({ format }) => format === "mp4").url}
          />
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
          <Medium className='medium'>{product.title}</Medium>
          <Large>
            {formatPrice(
              product.priceRange.maxVariantPrice.amount,
              product.priceRange.maxVariantPrice.currencyCode
            )}
          </Large>
          <Small>Tax included</Small>
          <Small>Shipping only in Czechia</Small>
          <Large
            onClick={() => {
              linesAdd([merchandise]);
            }}
          >
            add to cart
          </Large>
        </ProductInfo>
      </ProductSection>
      <ProjectsSlider
        projects={projects}
        header='See also our client work'
        linkText={"All projects"}
        url='/projects/all-projects'
      />
    </StyledProduct>
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
