import { AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import { MoneyV2 } from "../../generated/shopifyTypes";
import { easing } from "../../helpers/animationConfig";
import { formatPrice } from "../../helpers/formatPrice";
import { HoverProvider } from "../../pages/_app";
import { Nano } from "../Typo/Nano";
import { Small } from "../Typo/Small";
import {
  ProductCardButton,
  ProductCardCover,
  ProductCardCoverW,
  ProductCardCoverWI,
  ProductCardInfo,
  ProductCardInfoFooter,
  ProductCardInfoGrad,
  ProductCardInfoHeader,
  StyledProductCard,
} from "./StyledProductCard";

interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ProductCardProps {
  title: string;
  price: MoneyV2;
  availableForSale: boolean;
  slug: string;
  cover: Image;
  hoverCover: Image;
}

const ProductCard = ({
  title,
  cover,
  price,
  hoverCover,
  availableForSale,
  slug,
}: ProductCardProps) => {
  const { setCursorType } = useContext(HoverProvider);
  const [hover, sethover] = useState<boolean>(false);
  const transition = { ease: easing, duration: 0.3 };

  return (
    <StyledProductCard
      onMouseEnter={() => {
        setCursorType("hover");
        sethover(true);
      }}
      onMouseLeave={() => {
        setCursorType("normal");
        sethover(false);
      }}
      className={`${!availableForSale ? "inactive" : ""}`}
      href={`/apparel/${slug}`}
    >
      <ProductCardInfo>
        <ProductCardInfoHeader>
          <Small className='white'>{title}</Small>
        </ProductCardInfoHeader>
        <ProductCardInfoFooter>
          <AnimatePresence mode='popLayout'>
            <Small
              className='white'
              layout={"position"}
              key={slug + "price"}
              transition={transition}
            >
              {formatPrice(price.amount, price.currencyCode, "en-GB")}
            </Small>
            <Small
              className='white'
              layout={"position"}
              key={slug + "avaibility"}
              transition={transition}
            >
              {availableForSale ? "in stock" : "out of stock"}
            </Small>
            {hover && (
              <ProductCardButton
                layout={"position"}
                key={slug + "button"}
                initial={{ y: "150%" }}
                animate={{ y: "0%", transition }}
                exit={{ y: "150%", transition }}
              >
                <Nano>buy now</Nano>
              </ProductCardButton>
            )}
          </AnimatePresence>
        </ProductCardInfoFooter>
      </ProductCardInfo>
      <ProductCardCoverW>
        <ProductCardInfoGrad />
        <ProductCardCoverWI
          animate={{ opacity: hoverCover && hover ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          style={{ zIndex: 2 }}
        >
          <ProductCardCover
            src={cover.src}
            width={cover.width}
            height={cover.height}
            alt={title}
          />
        </ProductCardCoverWI>
        {hoverCover && (
          <ProductCardCoverWI>
            <ProductCardCover
              src={hoverCover.src}
              width={hoverCover.width}
              height={hoverCover.height}
              alt={title}
            />
          </ProductCardCoverWI>
        )}
      </ProductCardCoverW>
    </StyledProductCard>
  );
};

export default ProductCard;
