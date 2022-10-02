import { useEffect, useRef } from "react";
import "./loading.scss";
import lottie from "lottie-web";

export const Loading = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./loadingAnimation.json"),
    });
  });

  return (
    <div className="loading">
      <div className="lottie-container" ref={container}></div>
    </div>
  );
};
