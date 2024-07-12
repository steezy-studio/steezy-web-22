import { MoneyV2 } from "@shopify/hydrogen-react/storefront-api-types";
import { useInView } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { easing } from "../../helpers/animationConfig";
import { formatPrice } from "../../helpers/formatPrice";
import _isTouchDevice from "../../helpers/isTouchDevice";
import { CursorContext } from "../Cursor/CursorProvider";
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
  animateOrder?: number;
  animateInView?: boolean;
}

const ProductCard = ({
  title,
  cover,
  price,
  hoverCover,
  availableForSale,
  slug,
  animateOrder,
  animateInView,
}: ProductCardProps) => {
  const { setCursorType } = useContext(CursorContext);
  const [hover, sethover] = useState<boolean>(true);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const allowHover = useRef<boolean>(false);
  const transition = { ease: easing, duration: 0.3 };
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0 });

  useEffect(() => {
    setIsTouchDevice(_isTouchDevice());
  }, []);

  useEffect(() => {
    const shouldAnimate = animateInView ? inView : true;
    if (animateOrder !== undefined && shouldAnimate) {
      setTimeout(() => {
        sethover(false);
        allowHover.current = true;
      }, (Math.pow((animateOrder + 1) * 0.2, 0.4) + 2) * 1000);
    }
  }, [animateOrder, inView, animateInView]);

  return (
    <StyledProductCard
      onMouseEnter={() => {
        if (!allowHover.current) return;
        setCursorType("hover");
        sethover(true);
      }}
      onMouseLeave={() => {
        if (!allowHover.current) return;
        setCursorType("normal");
        sethover(false);
      }}
      className={`${!availableForSale ? "inactive" : ""}`}
      href={`/apparel/${slug}`}
    >
      <ProductCardInfo ref={ref}>
        <ProductCardInfoHeader>
          <Small className='white'>{title}</Small>
        </ProductCardInfoHeader>
        <ProductCardInfoFooter
          className={!isTouchDevice && hover ? "hover" : ""}
        >
          <Small className='white'>
            {formatPrice(price.amount, price.currencyCode, "en-GB")}
          </Small>
          <Small className='white'>
            {availableForSale ? "in stock" : "out of stock"}
          </Small>
          <ProductCardButton>
            <Nano className='uppercase'>buy now</Nano>
          </ProductCardButton>
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
            priority
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
