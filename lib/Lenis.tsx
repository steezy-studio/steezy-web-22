"use client";

import { ReactLenis } from "lenis/react";
import React from "react";

interface LenisProps {
  children: React.ReactNode;
}

const LenisContext = ({ children }: LenisProps) => {
  return <ReactLenis root={false}>{children}</ReactLenis>;
};

export default LenisContext;
