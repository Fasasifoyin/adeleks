import { useLayoutEffect, useRef, useState } from "react";

const useElementHeight = () => {
  const elementRef = useRef();
  const [elementHeight, setElementHeight] = useState(0);

  useLayoutEffect(() => {
    function handleResize() {
      if (elementRef.current) {
        const height = elementRef.current.offsetHeight;
        setElementHeight(height);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [elementRef]);

  return { elementHeight, elementRef };
};

export default useElementHeight;
