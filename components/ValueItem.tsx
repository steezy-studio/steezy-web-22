import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import strings from "../data/strings";
import { device } from "../helpers/consts";
import { useIntersectionObserver } from "../hooks/useIntersectionVideoObserver";
import { useWindowSize } from "../hooks/useWindowSize";
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
  order: number;
  onFocusChange: (id: number) => void;
  isFocused: boolean;
  id: number;
}

const ValueItem = ({
  header,
  order,
  perex,
  onFocusChange,
  id,
  isFocused,
}: ValueItemProps) => {
  const valueRef = useRef(null);
  let _order = order + 1;

  const formatedOrder = _order < 10 ? `0${_order}` : String(_order);
  const [scrollDirection, setScrollDirection] = useState("down");
  const { w } = useWindowSize();
  const isTooSmall = w > device.tabletPortrait;

  useIntersectionObserver(
    valueRef,
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && isTooSmall) onFocusChange(id);
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
    if (isTooSmall) {
      window.addEventListener("wheel", handleScroll);
      return () => {
        window.removeEventListener("wheel", handleScroll);
      };
    }
  }, [w]);

  return (
    <StyledValueItem ref={valueRef} order={order}>
      <div>
        {isFocused && (
          <motion.div
            layoutId={w <= device.phone ? undefined : `value-header`}
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
    </StyledValueItem>
  );
};

export default ValueItem;
