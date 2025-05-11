import { useState, useEffect, useRef, useCallback } from "react";

type Props = {
  intersectionOptions: IntersectionObserverInit;
  onIntersection?: (entry: IntersectionObserverEntry) => void;
};

export const useIsOnScreen = <TElement extends HTMLElement>(
  { intersectionOptions, onIntersection } = {} as Props,
) => {
  const ref = useRef<TElement | null>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  const handleInitObserver = useCallback(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
      onIntersection?.(entry);
    }, intersectionOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [intersectionOptions, onIntersection]);

  useEffect(handleInitObserver, [handleInitObserver]);

  return {
    isIntersecting,
    ref,
  };
};
