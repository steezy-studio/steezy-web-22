import { ImageProps } from "next/image";
import React, { useContext, useMemo, useRef, useState } from "react";
import shortid from "shortid";
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

interface ImgList extends ImageProps {}

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

function addUniqueIds(arr: ImgList[]): ImgList[] {
  return arr.map((item, i) => ({ ...item, id: item.id + i }));
}

function cloneArray<T>(arr: T[], multiplier: number): T[] {
  return new Array(multiplier).fill(arr).flat();
}

const ImageSlider = ({ imgList }: ImageSliderProps, ref) => {
  const imageSlideRef = useRef(null);
  const touchStart = useRef({ x: 0, y: 0 });
  const touchEnd = useRef({ x: 0, y: 0 });
  const multiplier = 3;
  const { setCursorHover } = useContext(HoverProvider);

  const clonedImgList = useMemo(() => {
    const clonedArray = cloneArray(imgList, multiplier);
    return addUniqueIds(clonedArray);
  }, []);

  const totalImgList = imgList.length;
  const [index, setIndex] = useState({
    index: totalImgList,
    shouldAnimate: true,
  });
  const [sliderItems, setSliderItems] = useState(clonedImgList);
  const totalSliderItems = sliderItems.length;

  const handleClick = (dir) => {
    const nextIndex = index.index + dir;

    if (nextIndex < 0 || nextIndex > totalSliderItems - totalImgList) return;
    setIndex({ index: nextIndex, shouldAnimate: true });
  };

  const handleTouchStart = (e) => {
    touchStart.current = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    };
  };

  const handleTouchEnd = (e) => {
    touchEnd.current = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    };

    if (touchStart.current.x - touchEnd.current.x < 0) {
      handleClick(-1);
    } else {
      handleClick(1);
    }
  };

  return (
    <StyledImageSlider ref={ref}>
      <Slider>
        <SliderInner
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}>
          {sliderItems.map((image, order) => {
            return (
              <ImageSlide
                key={image.id}
                ref={imageSlideRef}
                custom={{ index }}
                initial={{ x: `${index.index * 100}%` }}
                animate={{ x: `${index.index * -100}%` }}
                onAnimationComplete={(e) => {
                  if (
                    index.index === totalSliderItems - totalImgList ||
                    index.index === 0
                  ) {
                    setIndex({ index: 4, shouldAnimate: false });
                  }
                }}
                transition={{
                  duration: index.shouldAnimate ? 0.7 : 0,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                <Img {...image} />
              </ImageSlide>
            );
          })}
        </SliderInner>
      </Slider>
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

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
