import { useEffect, useRef, useState } from "react";

export function useWindowSize() {
  const initialState = { w: 0, h: 0 };
  const [dim, setDim] = useState(initialState);
  const prevDim = useRef(initialState);

  const handleResize = () => {
    const newdim = { w: window.innerWidth, h: window.innerHeight };
    if (prevDim.current.w !== newdim.w) {
      prevDim.current = newdim;
      setDim(newdim);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dim;
}
