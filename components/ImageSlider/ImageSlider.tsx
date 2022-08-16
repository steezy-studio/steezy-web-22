import {
  AnimatePresence,
  motion,
  AnimateSharedLayout,
  LayoutGroup,
} from "framer-motion";
import { ImageProps } from "next/image";
import React, { useContext, useState } from "react";
import { useTheme } from "styled-components";
import strings from "../../data/strings";
import u from "../../helpers/unit";
import { useWindowSize } from "../../hooks/useWindowSize";
import { HoverProvider } from "../../pages/_app";
import Img from "../Img/Img";
import { StyledLink } from "../Link/Styles/StyledLink";
import { Large } from "../Typo/Large";
import { Medium } from "../Typo/Medium";
import {
  ImageSliderInner,
  StyledImageSlider,
} from "./Styles/StyledImageSlider";

interface ImageSliderProps {
  imgList: ImageProps[];
}

// [0 1 2] 3 4
// v
// 0 [1 2 3] 4
// v
// 0 1 [2 3 4]
// v
// 0] 1 2 [3 4

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const makeRangeArray = (max: number) => {
  return [...new Array(max)].map((_, i) => i);
};

const ImageSlider = ({ imgList }: ImageSliderProps, ref) => {
  const [activeImages, setActiveImages] = useState(imgList);
  const { setCursorHover } = useContext(HoverProvider);
  const [index, setIndex] = useState(0);
  const totalImages = imgList.length;

  React.useEffect(() => {
    const first = wrap(0, totalImages, index);
    const second = wrap(0, totalImages, index + 1);
    const third = wrap(0, totalImages, index + 2);
    const fourth = wrap(0, totalImages, index + 3);
    setActiveImages([
      imgList[first],
      imgList[second],
      imgList[third],
      imgList[fourth],
    ]);
  }, [index]);

  const handleClick = () => {
    setIndex((prev) => prev + 1);
  };

  return (
    <StyledImageSlider ref={ref}>
      <ImageSliderInner>
        <AnimatePresence exitBeforeEnter>
          {activeImages.map((image, order) => (
            <motion.div
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              key={String(order) + String(index)}
              exit={{ x: `-100%` }}>
              <Img {...image} />
            </motion.div>
          ))}
        </AnimatePresence>
      </ImageSliderInner>
      <Large>
        <StyledLink
          onClick={handleClick}
          onMouseEnter={() => {
            setCursorHover(true);
          }}
          onMouseLeave={() => {
            setCursorHover(false);
          }}>
          {strings.globals.nextImage}
        </StyledLink>
      </Large>
    </StyledImageSlider>
  );
};

export default React.forwardRef(ImageSlider);
