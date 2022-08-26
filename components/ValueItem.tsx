import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import strings from "../data/strings";
import { useIntersectionObserver } from "../hooks/useIntersectionVideoObserver";
import Img from "./Img/Img";
import {
  Order,
  StyledValueItem,
  ValueBody,
  ValueCover,
  ValueCoverWrapper,
  ValueHeader,
  ValueItemContent,
} from "./StyledValueItem";
import { Medium } from "./Typo/Medium";
import { Micro } from "./Typo/Micro";
import { Small } from "./Typo/Small";

interface ValueItemProps {
  header: string;
  perex: string;
  src: string;
  order: number;
  onFocusChange: (id: number) => void;
  isFocused: boolean;
  id: number;
}

const ValueItem = ({
  header,
  order,
  perex,
  src,
  onFocusChange,
  id,
  isFocused,
}: ValueItemProps) => {
  const valueRef = useRef(null);
  let _order = order + 1;

  const formatedOrder = _order < 10 ? `0${_order}` : String(_order);
  const [scrollDirection, setScrollDirection] = useState("down");

  useIntersectionObserver(
    valueRef,
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onFocusChange(id);
        }
      });
    },
    {
      rootMargin:
        scrollDirection === "down" ? "-70% 0% -30% 0%" : "-40% 0% -60% 0%",
      threshold: 0,
    }
  );

  const handleScroll = (e) => {
    const direction = Math.floor(e.deltaY);
    setScrollDirection(direction < 0 ? "up" : "down");
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <StyledValueItem ref={valueRef} order={order}>
      <ValueItemContent>
        <div>
          {isFocused && (
            <motion.div
              layoutId={`value-header`}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}>
              <Micro className='with-dash'>
                {strings.studioPage.values.header}
              </Micro>
            </motion.div>
          )}
        </div>

        <ValueBody>
          <Order>{formatedOrder}</Order>
          <ValueHeader>
            <Medium className='big'>{header}</Medium>
            <Small className='big-lh'>{perex}</Small>
          </ValueHeader>
        </ValueBody>
      </ValueItemContent>

      <ValueCoverWrapper>
        {isFocused && (
          <ValueCover
            initial={{ opacity: 0.1 }}
            animate={{ opacity: 1 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
            layoutId='value-image'>
            <Img
              src={`/images/${src}`}
              blurDataURL={`/images/${src}`}
              placeholder='blur'
              layout={`intrinsic`}
              objectFit={"cover"}
              width={1500}
              height={1000}
            />
          </ValueCover>
        )}
      </ValueCoverWrapper>
    </StyledValueItem>
  );
};

export default ValueItem;
