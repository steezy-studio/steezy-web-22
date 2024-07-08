"use client";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface NavbarControlsProps {
  children: React.ReactNode;
}

interface NavbarContext {
  isOpen: (scope: string) => boolean;
  setIsOpen: (scope: string, isOpen: boolean) => void;
}

interface NavlinksState {
  scope: string;
  isOpen: boolean;
}

export const NavbarContext = React.createContext<NavbarContext>(null);

const NavbarControls = ({ children }: NavbarControlsProps) => {
  const { pathname } = useRouter();

  const [areNavlinksOpen, setAreNavlinksOpen] = useState<NavlinksState>({
    scope: pathname,
    isOpen: false,
  });

  useEffect(() => {
    setAreNavlinksOpen({ scope: pathname, isOpen: false });
  }, [pathname]);

  const isOpen = (scope: string) => {
    if (areNavlinksOpen.scope === scope) {
      return areNavlinksOpen.isOpen;
    }
    return false;
  };

  const setIsOpen = (scope: string, isOpen: boolean) => {
    setAreNavlinksOpen({ scope, isOpen });
  };

  return (
    <NavbarContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarControls;
