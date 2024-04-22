import { useAnimationControls } from "framer-motion";
import {
  MouseEventHandler,
  ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { transition } from "../../helpers/consts";
import { useWindowSize } from "../../hooks/useWindowSize";
import { HoverProvider } from "../../pages/_app";
import {
  Slide,
  SliderBound,
  Slides,
  StyledSlider,
} from "./Styles/StyledSlider";
import { clearEmptyVals } from "./clearEmptyVals";
import { isCursorWithinBounds } from "./isCursorWithinBounds";

interface SliderProps {
  children: ReactNode[];
  config?: { [key: number]: { slidesCount?: number; step: number } };
  offsetNav?: number;
}

const Slider = ({
  children: _children,
  config,
  offsetNav = 1,
}: SliderProps) => {
  const [position, setPosition] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(0);
  const [step, setstep] = useState(1);
  const { cursorType, setCursorType, cursorRef } = useContext(HoverProvider);
  const controls = useAnimationControls();
  const { w } = useWindowSize();

  const imageSlideRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const itemWidth = useRef<number>(null);
  const totalWidth = useRef<number>(null);
  const children = clearEmptyVals(_children);
  console.log(step, slidesPerView);

  // handle breakpoints
  useEffect(() => {
    setPosition(0);
    controls.start({
      x: `${0}px`,
    });

    const sortedDevices = Object.keys(config).sort(
      (a, b) => Number(a) - Number(b)
    );
    const currentDeviceKey =
      sortedDevices.find((key) => w < Number(key) || w === Number(key)) ||
      sortedDevices[sortedDevices.length - 1];
    setSlidesPerView(config[currentDeviceKey].slidesCount || 0);
    setstep(config[currentDeviceKey].step || 1);
  }, [w]);

  // calculate item width and total width
  useLayoutEffect(() => {
    const columnGap = Number(
      getComputedStyle(sliderRef.current).getPropertyValue("--column-gap")
    );
    const slidesEl = containerRef.current.querySelector(
      "[data-slides]"
    ) as HTMLElement;

    const images = [...imageSlideRef.current.children];
    const imgPromises = images.map((image) => {
      return new Promise((resolve) => {
        if (slidesPerView === 0) {
          (image as HTMLImageElement).onload = resolve;
        } else {
          resolve("");
        }
      });
    });

    Promise.all(imgPromises).then(() => {
      const slidesChildren = slidesEl.children;
      itemWidth.current = 0;
      totalWidth.current = 0;

      for (const slide of slidesChildren) {
        const slideEl = slide as HTMLElement;
        if (slidesPerView) {
          slideEl.style.width = `${
            containerRef.current.clientWidth / slidesPerView -
            columnGap -
            columnGap / children.length
          }px`;
        }
        totalWidth.current += slide.clientWidth + columnGap;
      }
      totalWidth.current -= columnGap;

      slidesEl.style.width = `${totalWidth.current}px`;
      itemWidth.current = slidesPerView
        ? containerRef.current.clientWidth / slidesPerView
        : totalWidth.current / children.length;
    });
  }, [slidesPerView]);

  const handleIndexChange = (dir) => {
    const nextPosition = position + dir * step;
    const columnGap = Number(
      getComputedStyle(sliderRef.current).getPropertyValue("--column-gap")
    );

    if (
      nextPosition < 0 ||
      nextPosition > children.length - Math.trunc(slidesPerView)
    ) {
      return;
    }
    setPosition(nextPosition);
    const maxSteps = children.length - Math.trunc(slidesPerView);

    const compensateOffset =
      (containerRef.current.clientWidth -
        itemWidth.current * Math.floor(slidesPerView) +
        2 * columnGap) *
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
    const containerBB = containerRef.current.getBoundingClientRect();
    const cursorX = Number(cursorRef.current.dataset.x);
    const nextPossibleIndex =
      cursorX <= containerBB.width / 2 ? position - 1 : position + 1;
    const cursorInBounds = isCursorWithinBounds(
      containerRef.current,
      cursorX,
      offsetNav
    );
    const leftBound = containerRef.current.querySelector(
      ".left"
    ) as HTMLDivElement;
    const rightBound = containerRef.current.querySelector(
      ".right"
    ) as HTMLDivElement;

    if (cursorInBounds && nextPossibleIndex < 0) {
      leftBound.style.pointerEvents = "none";
    } else {
      leftBound.style.pointerEvents = "all";
    }

    if (
      cursorInBounds &&
      nextPossibleIndex > children.length - Math.floor(slidesPerView)
    ) {
      rightBound.style.pointerEvents = "none";
    } else {
      rightBound.style.pointerEvents = "all";
    }
  };

  const handleClick = (e) => {
    if (
      !isCursorWithinBounds(
        containerRef.current,
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
      ref={containerRef}
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
      <Slides
        data-slides
        ref={sliderRef}
        animate={controls}
        transition={transition}
        onAnimationComplete={() => {
          handleNextPossibleIndex();
        }}
      >
        {children.map((batch, i) => {
          return (
            <Slide key={i} ref={imageSlideRef}>
              {batch}
            </Slide>
          );
        })}
      </Slides>
    </StyledSlider>
  );
};

export default Slider;
