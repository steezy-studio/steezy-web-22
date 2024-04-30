import { useAnimationControls } from "framer-motion";
import {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { transition } from "../../helpers/consts";
import { HoverProvider } from "../../pages/_app";
import {
  Slide,
  SliderBound,
  Slides,
  StyledSlider,
} from "./Styles/StyledSlider";
import { useSwipe } from "../../hooks/useSwipe";
import { useWindowSize } from "../../hooks/useWindowSize";
import { usePathname } from "next/navigation";

interface SliderProps {
  children: ReactNode[];
  config?: { [key: number]: { step: number } };
  navigationWidth?: number;
}

const Slider = ({ children, config, navigationWidth = 1 }: SliderProps) => {
  const [position, setPosition] = useState(0);
  const [step, setstep] = useState(2);
  const { setCursorType } = useContext(HoverProvider);
  const controls = useAnimationControls();
  const pathname = usePathname();
  const { w } = useWindowSize();

  const imageSlideRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const sliderRef = useRef<HTMLDivElement>(null);
  const offset = useRef<number>(0);
  const maxOffset = useRef<number>(0);
  const cutoffOffset = useRef<number>(0);

  const handleIndexChange = (dir) => {
    const slides = sliderRef.current.children;
    const nextPosition = Math.min(
      slides.length,
      Math.max(position + step * dir, 0)
    );
    const rightBound = getBound("right");
    const leftBound = getBound("left");
    const safezone = 100;
    maxOffset.current =
      sliderRef.current.clientWidth - containerRef.current.clientWidth;

    let distance = 0;
    const columnGap = parseInt(
      window
        .getComputedStyle(sliderRef.current)
        .getPropertyValue("--column-gap")
    );

    for (let i = 0; i < step; i++) {
      const itemIndex = dir === 1 ? position + i : position - i - 1;
      const slide = slides?.item(itemIndex);
      console.log(itemIndex, nextPosition);

      distance += slide?.clientWidth || 0;
      distance += columnGap;
    }
    offset.current += distance * dir;

    if (offset.current <= safezone) {
      offset.current = 0;
      leftBound.style.display = "none";
    } else {
      leftBound.style.display = "block";
    }

    if (offset.current >= maxOffset.current - safezone) {
      cutoffOffset.current = offset.current - maxOffset.current;
      offset.current = maxOffset.current;
      rightBound.style.display = "none";
    } else {
      rightBound.style.display = "block";
      offset.current += cutoffOffset.current;
      cutoffOffset.current = 0;
    }

    controls.start({
      x: `${-offset.current}px`,
    });
    setPosition(nextPosition);
  };

  useSwipe({ ref: containerRef, cb: handleIndexChange, deps: [position] });
  function getBound(side: "left" | "right") {
    return containerRef.current.querySelector(`.${side}`) as HTMLDivElement;
  }

  useLayoutEffect(() => {
    maxOffset.current =
      sliderRef.current.clientWidth - containerRef.current.clientWidth;
    cutoffOffset.current = 0;
    offset.current = 0;
    setPosition(0);
    controls.start({ x: "0px" });

    const rightBound = getBound("right");
    const leftBound = getBound("left");
    leftBound.style.display = "none";
    rightBound.style.display = "block";

    const sortedDevices = Object.keys(config || {})?.sort(
      (a, b) => Number(a) - Number(b)
    );
    const currentDeviceKey =
      sortedDevices.find(
        (key) => innerWidth < Number(key) || innerWidth === Number(key)
      ) || sortedDevices[sortedDevices.length - 1];

    setstep(config?.[currentDeviceKey]?.step || 1);
  }, [w, pathname, step]);

  return (
    <StyledSlider
      ref={containerRef}
      onMouseEnter={() => setCursorType("hover")}
      onMouseLeave={() => setCursorType("normal")}
    >
      <SliderBound
        className='left'
        onClick={() => handleIndexChange(-1)}
        onMouseEnter={() => setCursorType("left")}
        onMouseLeave={() => setCursorType("hover")}
        style={{ width: `${(100 * navigationWidth) / 2}%`, display: "none" }}
      />
      <SliderBound
        className='right'
        onMouseEnter={() => setCursorType("right")}
        onMouseLeave={() => setCursorType("hover")}
        onClick={() => handleIndexChange(1)}
        style={{ width: `${(100 * navigationWidth) / 2}%` }}
      />
      <Slides
        data-slides
        ref={sliderRef}
        animate={controls}
        transition={transition}
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
