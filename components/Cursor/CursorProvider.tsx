import React, { MutableRefObject, useRef, useState } from "react";
import Cursor, { CursorTypes } from "./Cursor";

export const HoverProvider = React.createContext<{
  setIsCursorDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  setCursorType: React.Dispatch<React.SetStateAction<CursorTypes>>;
  cursorType: CursorTypes;
  cursorRef: MutableRefObject<HTMLDivElement>;
}>(null);

const CursorProvider = ({ children }) => {
  const [isCursorDisabled, setIsCursorDisabled] = useState(false);
  const [cursorType, setCursorType] = useState<CursorTypes>("normal");
  const cursorRef = useRef<HTMLDivElement>(null);
  return (
    <HoverProvider.Provider
      value={{
        setIsCursorDisabled,
        setCursorType,
        cursorType,
        cursorRef,
      }}
    >
      <Cursor
        cursorRef={cursorRef}
        cursorType={cursorType}
        isCursorDisabled={isCursorDisabled}
      />
      {children}
    </HoverProvider.Provider>
  );
};

export default CursorProvider;
