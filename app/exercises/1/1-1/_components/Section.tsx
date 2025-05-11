"use client";

import { useIsOnScreen } from "@/shared/hooks/useIsOnScreen";
import { ComponentProps, useState } from "react";

export const Section = ({
  children,
  className = "",
  ...props
}: ComponentProps<"section">) => {
  const { isIntersecting, ref } = useIsOnScreen({
    intersectionOptions: {
      rootMargin: "0px",
      threshold: 0.25,
    },
  });
  const [showClass, setShowClass] = useState("");

  if (isIntersecting && !showClass) {
    setShowClass("opacity-100 [&&]:translate-y-0");
  }

  return (
    <section
      ref={ref}
      className={`${className} flex min-h-dvh translate-y-5 snap-start items-center justify-center p-20 opacity-0 transition-[opacity,transform] delay-500 ease-in ${showClass}`}
      {...props}
    >
      {children}
    </section>
  );
};
