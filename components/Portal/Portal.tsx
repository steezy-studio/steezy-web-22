"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  selector: string;
  children: React.ReactNode;
}

const Portal = ({ selector, children }: PortalProps) => {
  const [portalRef, setPortalRef] = useState<Element | null>(null!);

  useEffect(() => {
    setPortalRef(document.querySelector(selector));
  }, [selector]);

  return <>{portalRef ? createPortal(children, portalRef) : null}</>;
};

export default Portal;
