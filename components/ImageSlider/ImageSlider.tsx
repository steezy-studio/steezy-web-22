import { useAnimationControls } from "framer-motion";
import { ImageProps } from "next/image";
import React, {
  MouseEventHandler,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { device, transition } from "../../helpers/consts";
import { loadImage } from "../../helpers/loadImage";
import { useWindowSize } from "../../hooks/useWindowSize";
import { HoverProvider } from "../../pages/_app";
import Img from "../Img/Img";
import {
  ImageSlide,
  Slider,
  StyledImageSlider,
} from "./Styles/StyledImageSlider";

interface ImgList extends ImageProps {}

interface ImageSliderProps {
  imgList: ImgList[];
}

function cloneArray<T>(arr: T[], multiplier: number): T[] {
  return new Array(multiplier).fill(arr).flat();
}

const ImageSlider = ({ imgList }: ImageSliderProps, ref) => {
  const sideMultiplier = 2;
  const multiplier = sideMultiplier * 2 + 1;
  const clonedArray = cloneArray(imgList, multiplier);
  const childrenLength = imgList.length;
  const initialIndex = sideMultiplier * childrenLength;

  const [index, setIndex] = useState(initialIndex);
  const { cursorType, setCursorType, cursorRef } = useContext(HoverProvider);
  const controls = useAnimationControls();
  const { w } = useWindowSize();

  const imageSlideRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const itemWidth = useRef<number>(null);
  const isAnimating = useRef<boolean>(false);
  const touchStart = useRef({ x: 0, y: 0 });
  const touchEnd = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const slidesPerView = w <= device.phone ? 1.2 : 2.2;
    itemWidth.current = sliderRef.current.clientWidth / slidesPerView;
    sliderRef.current.style.gridAutoColumns = `${itemWidth.current}px`;
    controls.set({
      x: `${-1 * index * itemWidth.current}px`,
    });
  }, [w]);

  const handleClick = (dir) => {
    if (isAnimating.current) return;
    const nextIndex = index + dir;
    setIndex(nextIndex);
    controls.start({ x: `${-1 * nextIndex * itemWidth.current}px` });
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

  const handleSliderMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {};

  const handleSliderMouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    setCursorType("normal");
  };

  const handleSliderMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const containerWidth = e.currentTarget.clientWidth;
    const cursorBoundingBox = cursorRef.current.getBoundingClientRect();

    if (containerWidth / 2 <= cursorBoundingBox.x) {
      setCursorType("right");
    } else {
      setCursorType("left");
    }
  };

  return (
    <StyledImageSlider ref={ref}>
      <Slider
        ref={sliderRef}
        animate={controls}
        onMouseEnter={handleSliderMouseEnter}
        onMouseMove={handleSliderMouseMove}
        onMouseLeave={handleSliderMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        transition={transition}
        onClick={() => {
          const dir = cursorType === "left" ? -1 : 1;
          handleClick(dir);
        }}
        onAnimationStart={() => {
          isAnimating.current = true;
        }}
        onAnimationComplete={() => {
          if (
            index <= initialIndex - childrenLength ||
            index >= initialIndex + childrenLength
          ) {
            controls.set({ x: `${-1 * itemWidth.current * initialIndex}px` });
            setIndex(initialIndex);
          }
          isAnimating.current = false;
        }}>
        {clonedArray.map((image, i) => {
          return (
            <ImageSlide key={i} ref={imageSlideRef}>
              <Img {...image} objectFit='cover' />
            </ImageSlide>
          );
        })}
      </Slider>
    </StyledImageSlider>
  );
};

export default React.forwardRef(ImageSlider);

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
