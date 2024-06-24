"use client";

import React, { Dispatch, SetStateAction, useState } from "react";

interface NavbarControlsProps {
  children: React.ReactNode;
}

interface NavbarContext {
  areNavlinksOpen: boolean;
  setAreNavlinksOpen: Dispatch<SetStateAction<boolean>>;
}

export const NavbarContext = React.createContext<NavbarContext>(null);

const NavbarControls = ({ children }: NavbarControlsProps) => {
  const [areNavlinksOpen, setAreNavlinksOpen] = useState<boolean>(false);
  return (
    <NavbarContext.Provider
      value={{
        areNavlinksOpen,
        setAreNavlinksOpen,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarControls;
