"use client";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface NavbarControlsProps {
  children: React.ReactNode;
}

interface NavbarContext {
  isOpen: (scope: string) => boolean;
  setIsOpen: (scope: string, isOpen: boolean) => void;
  navbarHeader?: string;
  setNavbarHeader?: React.Dispatch<React.SetStateAction<string>>;
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
  const [navbarHeader, setNavbarHeader] = useState<string>(null);

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
        navbarHeader,
        setNavbarHeader,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarControls;
