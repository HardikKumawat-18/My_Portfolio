import { useEffect, useRef } from "react";
import "./scrollToTop.scss";

export const ScrollToTop = () => {
  const backToTop = useRef(null);

  const handleScroll = () => {
    let scrollY = window.scrollY;
    let screenHeight = window.innerHeight;
    if (scrollY > screenHeight) {
      backToTop.current.classList.add(`show`);
    } else {
      backToTop.current.classList.remove(`show`);
    }
  };

  useEffect(() => {
    document.addEventListener(`scroll`, handleScroll);

    return () => {
      document.removeEventListener(`scroll`, handleScroll);
    };
  });

  return (
    <div className="scroll-to-top" ref={backToTop}>
      <img
        className="scroll-top"
        src="/images/backToTop.svg"
        alt="backToTop"
        onClick={() => window.scrollTo(0, 0)}
      />
    </div>
  );
};
