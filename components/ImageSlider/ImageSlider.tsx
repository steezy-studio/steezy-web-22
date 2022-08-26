import { AnimatePresence } from "framer-motion";
import { ImageProps } from "next/image";
import React, { useContext, useRef, useState } from "react";
import strings from "../../data/strings";
import { HoverProvider } from "../../pages/_app";
import Img from "../Img/Img";
import { StyledLink } from "../Link/Styles/StyledLink";
import { Large } from "../Typo/Large";
import {
  ImageSlide,
  Slider,
  SliderInner,
  StyledImageSlider,
} from "./Styles/StyledImageSlider";
import shortid from "shortid";

interface ImgList extends ImageProps {
  id: string;
}

interface ImageSliderProps {
  imgList: ImgList[];
}

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
    const rangeArr = makeRangeArray(totalImages);
    const dynImgList = rangeArr.map((i, n) => {
      const _i = wrap(0, totalImages, index + i);
      if (n + 1 === totalImages) {
        return { ...imgList[_i], id: shortid.generate() };
      }
      return imgList[_i];
    });

    setActiveImages(dynImgList);
  }, [index]);

  const handleClick = (dir) => {
    setIndex((prev) => prev + dir);
  };

  return (
    <StyledImageSlider ref={ref}>
      <Slider drag={"x"} dragConstraints={{ right: 0, left: 0 }}>
        <SliderInner>
          <AnimatePresence>
            {activeImages.map((image, order) => {
              return (
                <ImageSlide
                  key={image.id}
                  layout
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
                  <Img {...image} />
                </ImageSlide>
              );
            })}
          </AnimatePresence>
        </SliderInner>
      </Slider>
      <Large>
        <StyledLink
          onClick={() => handleClick(-1)}
          onMouseEnter={() => {
            setCursorHover(true);
          }}
          onMouseLeave={() => {
            setCursorHover(false);
          }}>
          -1
        </StyledLink>
      </Large>
      <Large>
        <StyledLink
          onClick={() => handleClick(1)}
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
// const touchStart = useRef({ x: 0, y: 0 });
// const touchEnd = useRef({ x: 0, y: 0 });

// const handleTouchStart = (e: TouchEvent) => {
//   touchStart.current = {
//     x: e.changedTouches[0].clientX,
//     y: e.changedTouches[0].clientY,
//   };
// };

// const handleTouchEnd = (e: TouchEvent) => {
//   touchEnd.current = {
//     x: e.changedTouches[0].clientX,
//     y: e.changedTouches[0].clientY,
//   };

//   if (touchStart.current.x - touchEnd.current.x < 0) {
//     handleClick(-1);
//   } else {
//     handleClick(1);
//   }
// };

// React.useEffect(() => {
//   ref.current.addEventListener("touchstart", handleTouchStart);
//   ref.current.addEventListener("touchend", handleTouchEnd);
//   return () => {
//     ref.current.removeEventListener("touchstart", handleTouchStart);
//     ref.current.removeEventListener("touchend", handleTouchEnd);
//   };
// }, []);

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
