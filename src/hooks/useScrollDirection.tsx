import { useEffect, useState } from "react";

export function useScrollDirection(){
    const [showHeader, setShowHeader] = useState(true)

    let beforePosition = 0;

    const transitionNavgation = () => {
        if (window.scrollY < 100 || beforePosition > window.scrollY) setShowHeader(true);
        else setShowHeader(false);
        beforePosition = window.scrollY;
      };

      useEffect(() => {
        window.addEventListener("scroll", transitionNavgation);
        return () => window.removeEventListener("scroll", transitionNavgation);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return showHeader
}