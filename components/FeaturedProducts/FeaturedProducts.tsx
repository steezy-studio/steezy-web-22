"use client";

import {
  MediaImage,
  ProductConnection,
} from "@shopify/hydrogen-react/storefront-api-types";
import ProductCard from "../ProductCard/ProductCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import { FeaturedProductsGrid, SFeaturedProducts } from "./SFeaturedProducts";

interface FeaturedProductsProps {
  products: ProductConnection;
  header: string;
  url: string;
  linkText: string;
}

const FeaturedProducts = ({
  products,
  header,
  url,
  linkText,
}: FeaturedProductsProps) => {
  return (
    <SFeaturedProducts>
      <SectionHeader header={header} url={url} linkText={linkText} />
      <FeaturedProductsGrid>
        {products.nodes.map(
          ({ title, metafields, priceRange, availableForSale, handle }, i) => {
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
      </FeaturedProductsGrid>
    </SFeaturedProducts>
  );
};

export default FeaturedProducts;
