import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import strings from "../data/strings";
import { useIntersectionObserver } from "../hooks/useIntersectionVideoObserver";
import Animation from "./Animation/Animation";
import Img from "./Img/Img";
import {
  Order,
  StyledValueItem,
  ValueBody,
  ValueCover,
  ValueHeader,
} from "./StyledValueItem";
import { Medium } from "./Typo/Medium";
import { Micro } from "./Typo/Micro";
import { Small } from "./Typo/Small";

interface ValueItemProps {
  header: string;
  perex: string;
  src: string;
  order: string;
}

const ValueItem = ({ header, order, perex, src }: ValueItemProps) => {
  const valueRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useIntersectionObserver(
    valueRef,
    (entries) => {
      entries.forEach((entry) => {
        setIsFocused(entry.isIntersecting);
      });
    },
    { rootMargin: "-50% 0% -50% 0%", threshold: 0 }
  );

  return (
    <StyledValueItem ref={valueRef}>
      <motion.div
        key={`header` + order + isFocused}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        layoutId='value-header'
        layout
        layoutScroll
        // style={{ position: "absolute" }}
      >
        <Micro className='with-dash'>{strings.studioPage.values.header}</Micro>
      </motion.div>

      <ValueBody>
        <Order>{order}</Order>
        <ValueHeader>
          <Medium className='big'>{header}</Medium>
          <Small className='big-lh'>{perex}</Small>
        </ValueHeader>
      </ValueBody>

      <ValueCover
        key={`image` + order + isFocused}
        layoutId='value-image'
        layoutScroll
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        <Img src={`/images/${src}`} layout={`fill`} objectFit='cover' />
      </ValueCover>
    </StyledValueItem>
  );
};

export default ValueItem;
