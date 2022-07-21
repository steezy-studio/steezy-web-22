import { useEffect, useState } from "react";

export function useWindowSize() {
  const [dim, setDim] = useState({ w: 0, h: 0 });

  const handleResize = () => {
    setDim({ w: window.innerWidth, h: window.innerHeight });
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
