"use client";

import { useEffect, useRef, useState } from "react";
import { device } from "../../helpers/consts";
import { useWindowSize } from "../../hooks/useWindowSize";
import { SValuesList } from "./SValuesList";
import ValueItem from "./ValueItem";

interface ValuesListProps {
  list: { header: string; perex: string }[];
}

const ValuesList = ({ list }: ValuesListProps) => {
  const valueRef = useRef<HTMLDivElement>(null);
  const [focusedId, setFocusedId] = useState<number>(0);
  const inView = useRef<boolean>(false);
  const { w } = useWindowSize();

  useEffect(() => {
    if (!valueRef.current) return;
    if (w <= device.tabletPortrait) {
      setFocusedId(0);
      return;
    }
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      inView.current = entries.some((entry) => entry.isIntersecting);
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        setFocusedId(Number(target.dataset.focusedId));
      });
    };
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-50% 0%",
      threshold: 0,
    });

    valueRef.current.childNodes.forEach((child) => {
      observer.observe(child as Element);
    });
    return () => {
      observer.disconnect();
    };
  }, [w]);

  return (
    <SValuesList ref={valueRef}>
      {list.map(({ header, perex }, i) => {
        return (
          <ValueItem
            isFocused={focusedId === i}
            id={i}
            order={i}
            header={header}
            perex={perex}
            key={i}
          />
        );
      })}
    </SValuesList>
  );
};

export default ValuesList;
