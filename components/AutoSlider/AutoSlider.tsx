import React, { ReactNode, useEffect, useState } from "react";
import {
  AutoSliderItem,
  Indicator,
  Indicators,
  SliderItems,
  StyledAutoSlider,
} from "./StyledAutoSlider";
import { AnimatePresence } from "framer-motion";

interface AutoSliderProps {
  list: ReactNode[];
  interval?: number;
}

const AutoSlider = ({ list, interval = 3000 }: AutoSliderProps) => {
  const [index, setindex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = index + 1;
      if (nextIndex === list.length) {
        setindex(0);
        return;
      }
      setindex(nextIndex);
    }, interval);
    return () => {
      clearInterval(timer);
    };
  }, [index]);

  return (
    <StyledAutoSlider>
      <SliderItems>
        <AnimatePresence mode={"wait"}>
          <AutoSliderItem key={index}>{list[index]}</AutoSliderItem>
        </AnimatePresence>
      </SliderItems>
      <Indicators>
        {list.map((_, i) => (
          <Indicator
            key={i}
            className={i === index ? "active" : ""}
            animate={{ opacity: i === index ? 1 : 0.1 }}
            transition={{ duration: 0.7 }}
          />
        ))}
      </Indicators>
    </StyledAutoSlider>
  );
};

export default AutoSlider;
