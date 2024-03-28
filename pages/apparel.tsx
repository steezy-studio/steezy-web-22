import { GetStaticProps } from "next";
import getClient from "../apollo/client";
import Navbar from "../components/Navbar/Navbar";
import ProductCard from "../components/ProductCard/ProductCard";
import { Areas, Query } from "../generated/preprTypes";
import {
  ProductConnection,
  QueryRoot,
  QueryRootProductsArgs,
} from "../generated/shopifyTypes";
import { GET_ALL_AREAS } from "../graphql/GetAllAreas";
import { GET_PRODUCTS } from "../graphql/GetProducts";
import { ProductsGrid, StyledApparel } from "../pagestyles/StyledApparel";

interface apparelProps {
  products: ProductConnection;
  areas: Areas;
}

const apparel = ({ products, areas }: apparelProps) => {
  return (
    <StyledApparel>
      <Navbar areas={areas.items} />
      <ProductsGrid>
        {products.nodes.map(({ title }, i) => (
          <ProductCard key={i} title={title} />
        ))}
      </ProductsGrid>
    </StyledApparel>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const preprClient = getClient("prepr");
  const shopifyClient = getClient("shopify");
  const {
    data: { Areas: areas },
  } = await preprClient.query<Query>({
    query: GET_ALL_AREAS,
  });
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
          key: "product_video",
        },
      ],
    } as QueryRootProductsArgs,
  });

  return {
    props: { products, areas },
    revalidate: Number(process.env.REVALIDATE),
  };
};

export default apparel;
