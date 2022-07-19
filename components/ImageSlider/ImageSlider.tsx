import { AnimatePresence, motion } from "framer-motion";
import { ImageProps } from "next/image";
import React, { useState } from "react";
import { useTheme } from "styled-components";
import strings from "../../data/strings";
import u from "../../helpers/unit";
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

const ImageSlider = ({ imgList }: ImageSliderProps) => {
  const [index, setIndex] = useState(0);
  const imgsLength = imgList.length;
  const range = makeRangeArray(imgsLength);
  const itemsToDisplay = 3;
  const [visibleImages, setVisibleImages] = useState(
    range.slice(0, itemsToDisplay)
  );
  const theme = useTheme();

  React.useEffect(() => {
    const firstIndex = wrap(0, imgsLength, index);
    const secondIndex = wrap(0, imgsLength, index + 1);
    const thirdIndex = wrap(0, imgsLength, index + 2);

    setVisibleImages((prev) => {
      return [...prev, firstIndex];
    });
  }, [index]);

  const handleClick = () => {
    setIndex((i) => i + 1);
  };

  return (
    <StyledImageSlider>
      <ImageSliderInner
        animate={{ x: `${u(-1 * index * (8 - 15 / 16), theme.pageMargin)}` }}
        drag='x'
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);
          handleClick();
          if (swipe < -swipeConfidenceThreshold) {
          }
        }}>
        {visibleImages.map((i, order) => (
          <div key={order}>
            <Img {...imgList[i]} />
          </div>
        ))}
      </ImageSliderInner>
      <Large>
        <StyledLink onClick={handleClick}>
          {strings.globals.nextImage}
        </StyledLink>
      </Large>
    </StyledImageSlider>
  );
};

export default ImageSlider;
