"use client";

import { useLenis } from "lenis/react";
import { useState } from "react";

export const ScrollIndicator = () => {
  const [width, setWidth] = useState(0);

  useLenis((lenis) => {
    setWidth(lenis.progress * 100);
  });

  return (
    <div
      className="fixed top-0 z-10 h-2 border border-black bg-fuchsia-400"
      style={{ width: `${width}%` }}
    />
  );
};
