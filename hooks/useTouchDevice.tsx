import { useEffect, useState } from "react";
import _isTouchDevice from "../helpers/isTouchDevice";

export default function useTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  useEffect(() => {
    setIsTouchDevice(_isTouchDevice());
  }, []);

  return isTouchDevice;
}
