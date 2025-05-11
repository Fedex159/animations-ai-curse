"use client";

import ReactLenis, { LenisRef } from "lenis/react";
import { frame } from "motion";
import { PropsWithChildren, useEffect, useRef } from "react";

export const LenisProvider = ({ children }: PropsWithChildren) => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return;
  }, []);

  return (
    <ReactLenis root ref={lenisRef} options={{ autoRaf: false }}>
      {children}
    </ReactLenis>
  );
};
