import { useState, useEffect, useRef } from "react";

export function useMouseCoordinates() {
  const _x = useRef(0);
  const _y = useRef(0);
  const [coordinates, setCoordinates] = useState({
    x: -100,
    y: -100,
  });

  const handleCoordinates = (e) => {
    _x.current = e.clientX;
    _y.current = e.clientY;
    // setCoordinates({
    //   x: e.clientX,
    //   y: e.clientY,
    // });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleCoordinates);
    return () => {
      window.removeEventListener("mousemove", handleCoordinates);
    };
  }, []);

  return coordinates;
}
