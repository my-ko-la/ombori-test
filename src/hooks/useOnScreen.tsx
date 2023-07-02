import { MutableRefObject, useEffect, useState } from "react";

interface useOnScreen {
  hasBeenIntersected: boolean;
  isIntersecting: boolean;
}

export const useOnScreen = (
  ref?: MutableRefObject<Element | null>,
  rootMargin = "0px"
): useOnScreen => {
  const [isIntersecting, setIntersecting] = useState(false);
  const [hasBeenIntersected, setHasBeenIntersected] = useState(false);

  useEffect(() => {
    const element = ref?.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
        if (entry.isIntersecting) setHasBeenIntersected(true);
      },
      {
        rootMargin,
      }
    );
    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, rootMargin]);

  return {
    isIntersecting,
    hasBeenIntersected,
  };
};
