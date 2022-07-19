import { useEffect, useState } from "react";

export function useWindowSize() {
  const [dim, setDim] = useState({ w: 0, h: 0 });

  useEffect(() => {
    window.addEventListener("resize", (e: Event) => {
      const target = e.target as Window;
      setDim({ w: target.innerWidth, h: target.innerHeight });
    });
  }, []);

  return dim;
}
