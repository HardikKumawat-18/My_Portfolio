import { useEffect, useRef } from "react";
import "./notFound.scss";
import lottie from "lottie-web";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const container = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./notFoundAnimation.json"),
    });
  });

  return (
    <div className="not-found">
      <img
        src="/images/hrdkLogo.svg"
        alt="Logo"
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="lottie-container" ref={container}></div>
      <div className="content">
        <button
          className="std-btn"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
        <button
          className="std-btn"
          onClick={() => {
            navigate("/");
          }}
        >
          Go To Home
        </button>
      </div>
    </div>
  );
};
