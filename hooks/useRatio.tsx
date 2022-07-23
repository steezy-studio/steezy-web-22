import React, { useState } from "react";

export function useRatio(ref) {
  const [ratio, setRatio] = useState(0);

  React.useEffect(() => {
    setRatio(ref.current.videoHeight / ref.current.videoWidth);
  }, []);

  return ratio;
}
