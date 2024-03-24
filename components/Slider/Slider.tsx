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
}

const Slider = (
  { children, slidesPerView = 2.2, offsetNav = 1 }: SliderProps,
  ref: React.MutableRefObject<HTMLDivElement>
) => {
  const [index, setIndex] = useState(0);
  const { cursorType, setCursorType, cursorRef } = useContext(HoverProvider);
  const controls = useAnimationControls();
  const { w } = useWindowSize();

  const imageSlideRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const _ref = ref?.current ? ref : innerRef;
  const sliderRef = useRef<HTMLDivElement>(null);
  const itemWidth = useRef<number>(null);
  const clearedChildren = clearEmptyVals(children);

  useEffect(() => {
    itemWidth.current = sliderRef.current.clientWidth / slidesPerView;
    sliderRef.current.style.gridAutoColumns = `${itemWidth.current}px`;
  }, [w, slidesPerView, index]);

  const handleIndexChange = (dir) => {
    const nextIndex = index + dir;
    setIndex(nextIndex);
    controls.start({ x: `${-1 * nextIndex * itemWidth.current}px` });
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
      cursorX <= containerBB.width / 2 ? index - 1 : index + 1;
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
