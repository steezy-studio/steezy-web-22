import { AnimatePresence, LayoutGroup, useInView } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
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
import RevealAnimation from "../RevealAnimation/RevealAnimation";
import _isTouchDevice from "../../helpers/isTouchDevice";
import { MoneyV2 } from "@shopify/hydrogen-react/storefront-api-types";

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
  const { setCursorType } = useContext(HoverProvider);
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
    <RevealAnimation>
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
          <ProductCardInfoFooter>
            <LayoutGroup id='productCard'>
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
                {!isTouchDevice && hover && (
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
            </LayoutGroup>
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
    </RevealAnimation>
  );
};

export default ProductCard;
