import { useAnimationControls } from "framer-motion";
import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import { transition } from "../../helpers/consts";
import { HoverProvider } from "../../pages/_app";
import {
  Slide,
  SliderBound,
  Slides,
  StyledSlider,
} from "./Styles/StyledSlider";

interface SliderProps {
  children: ReactNode[];
  config?: { [key: number]: { step: number } };
  navigationWidth?: number;
}

// TODO fix end slide
// TODO bug with step one on studio page

const Slider = ({ children, config, navigationWidth = 1 }: SliderProps) => {
  const [position, setPosition] = useState(0);
  const [step, setstep] = useState(2);
  const { setCursorType } = useContext(HoverProvider);
  const controls = useAnimationControls();

  const imageSlideRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const offset = useRef<number>(0);
  const maxOffset = useRef<number>(0);

  function getBound(side: "left" | "right") {
    return containerRef.current.querySelector(`.${side}`) as HTMLDivElement;
  }

  useEffect(() => {
    const handleResize = () => {
      maxOffset.current =
        sliderRef.current.clientWidth - containerRef.current.clientWidth;
      offset.current = 0;
      setPosition(0);
      controls.start({ x: "0px" });

      const sortedDevices = Object.keys(config).sort(
        (a, b) => Number(a) - Number(b)
      );
      const currentDeviceKey =
        sortedDevices.find(
          (key) => innerWidth < Number(key) || innerWidth === Number(key)
        ) || sortedDevices[sortedDevices.length - 1];

      setstep(config[currentDeviceKey].step);
    };

    handleResize();
    addEventListener("resize", handleResize);
    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const rightBound = getBound("right");
    const leftBound = getBound("left");
    rightBound.style.display = "block";
    leftBound.style.display = "block";

    if (offset.current <= 0) {
      leftBound.style.display = "none";
    }

    if (offset.current >= maxOffset.current) {
      rightBound.style.display = "none";
    }
  }, [position]);

  const handleIndexChange = (dir) => {
    const maxPosition = Math.ceil(children.length / step);
    const slides = sliderRef.current.children;
    const nextPosition = Math.min(
      Math.max(position + step * dir, 0),
      maxPosition
    );

    let distance = 0;
    const columnGap = parseInt(
      window
        .getComputedStyle(sliderRef.current)
        .getPropertyValue("--column-gap")
    );

    for (let i = 0; i < step; i++) {
      distance += slides?.item(i + position)?.clientWidth || 0;
      distance += columnGap;
    }
    offset.current += distance * dir;
    if (offset.current < 0) {
      offset.current = 0;
    }

    if (offset.current > maxOffset.current) {
      offset.current = maxOffset.current;
    }

    controls.start({
      x: `${-offset.current}px`,
    });
    setPosition(nextPosition + 1);
  };

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
        style={{ width: `${(100 * navigationWidth) / 2}%` }}
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
