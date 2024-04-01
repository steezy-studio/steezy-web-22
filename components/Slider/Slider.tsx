import { useAnimationControls } from "framer-motion";
import React, {
  MouseEventHandler,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { transition } from "../../helpers/consts";
import { useWindowSize } from "../../hooks/useWindowSize";
import { HoverProvider } from "../../pages/_app";
import {
  Slide,
  SliderBound,
  StyledSlider,
  _Slider,
} from "./Styles/StyledSlider";
import { isCursorWithinBounds } from "./isCursorWithinBounds";
import { clearEmptyVals } from "./clearEmptyVals";

interface SliderProps {
  children: ReactNode[];
  slidesPerView?: number;
  offsetNav?: number;
  step?: number;
}

const Slider = (
  { children, slidesPerView = 0, offsetNav = 1, step = 1 }: SliderProps,
  ref: React.MutableRefObject<HTMLDivElement>
) => {
  const [position, setPosition] = useState(0);
  const { cursorType, setCursorType, cursorRef } = useContext(HoverProvider);
  const controls = useAnimationControls();
  const { w } = useWindowSize();

  const imageSlideRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const _ref = ref?.current ? ref : innerRef;
  const sliderRef = useRef<HTMLDivElement>(null);
  const itemWidth = useRef<number>(null);
  const totalWidth = useRef<number>(null);
  const clearedChildren = clearEmptyVals(children);

  useEffect(() => {
    const innerC = _ref.current.querySelector(
      "[data-slider-inner]"
    ) as HTMLElement;
    const slides = innerC.children;
    itemWidth.current = 0;
    totalWidth.current = 0;

    for (const slide of slides) {
      const slideEl = slide as HTMLElement;
      if (slidesPerView) {
        slideEl.style.width = `${_ref.current.clientWidth / slidesPerView}px`;
      }
      totalWidth.current += slide.clientWidth;
    }
    innerC.style.width = `${totalWidth.current}px`;
    itemWidth.current = slidesPerView
      ? _ref.current.clientWidth / slidesPerView
      : totalWidth.current / clearedChildren.length;
  }, [w]);

  const handleIndexChange = (dir) => {
    const nextPosition = position + dir * step;
    const columnGap = Number(
      getComputedStyle(sliderRef.current).getPropertyValue("--column-gap")
    );
    const columnGapsTotalWidth = columnGap * (clearedChildren.length - 1);

    if (
      nextPosition < 0 ||
      nextPosition > clearedChildren.length - Math.trunc(slidesPerView)
    ) {
      return;
    }
    setPosition(nextPosition);
    const maxSteps = clearedChildren.length - Math.trunc(slidesPerView);

    const compensateOffset =
      (_ref.current.clientWidth -
        itemWidth.current * Math.floor(slidesPerView) -
        columnGapsTotalWidth) *
      (nextPosition / maxSteps);

    const x = itemWidth.current * nextPosition - compensateOffset;
    if (!slidesPerView && x > totalWidth.current) {
      return;
    }

    controls.start({
      x: `${-x}px`,
    });
  };

  const handleSliderMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    setCursorType("hover");
  };

  const handleSliderMouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    setCursorType("normal");
  };

  const handleNextPossibleIndex = () => {
    const containerBB = _ref.current.getBoundingClientRect();
    const cursorX = Number(cursorRef.current.dataset.x);
    const nextPossibleIndex =
      cursorX <= containerBB.width / 2 ? position - 1 : position + 1;
    const cursorInBounds = isCursorWithinBounds(
      _ref.current,
      cursorX,
      offsetNav
    );
    const leftBound = _ref.current.querySelector(".left") as HTMLDivElement;
    const rightBound = _ref.current.querySelector(".right") as HTMLDivElement;

    if (cursorInBounds && nextPossibleIndex < 0) {
      leftBound.style.pointerEvents = "none";
    } else {
      leftBound.style.pointerEvents = "all";
    }

    if (
      cursorInBounds &&
      nextPossibleIndex > clearedChildren.length - Math.floor(slidesPerView)
    ) {
      rightBound.style.pointerEvents = "none";
    } else {
      rightBound.style.pointerEvents = "all";
    }
  };

  const handleClick = (e) => {
    if (
      !isCursorWithinBounds(
        _ref.current,
        Number(cursorRef.current.dataset.x),
        offsetNav
      )
    ) {
      return;
    }
    e.preventDefault();
    const dir = cursorType === "left" ? -1 : 1;
    handleIndexChange(dir);
  };

  return (
    <StyledSlider
      ref={_ref}
      onMouseEnter={handleSliderMouseEnter}
      onMouseMove={handleNextPossibleIndex}
      onMouseLeave={handleSliderMouseLeave}
    >
      <SliderBound
        className='left'
        onClick={handleClick}
        onMouseEnter={() => setCursorType("left")}
        onMouseLeave={() => setCursorType("hover")}
        style={{ width: `${(100 * offsetNav) / 2}%` }}
      />
      <SliderBound
        className='right'
        onMouseEnter={() => setCursorType("right")}
        onMouseLeave={() => setCursorType("hover")}
        onClick={handleClick}
        style={{ width: `${(100 * offsetNav) / 2}%` }}
      />
      <_Slider
        data-slider-inner
        ref={sliderRef}
        animate={controls}
        transition={transition}
        onAnimationComplete={() => {
          handleNextPossibleIndex();
        }}
      >
        {clearedChildren.map((batch, i) => {
          return (
            <Slide key={i} ref={imageSlideRef}>
              {batch}
            </Slide>
          );
        })}
      </_Slider>
    </StyledSlider>
  );
};

export default React.forwardRef(Slider);
