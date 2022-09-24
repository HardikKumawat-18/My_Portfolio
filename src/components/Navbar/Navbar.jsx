import "./navbar.scss";
import { useEffect } from "react";

export const Navbar = () => {
  useEffect(() => {
    let navbar = document.querySelector(".navbar");
    let initPos = 0;
    const handleScroll = () => {
      let currPos = window.scrollY;
      if (currPos > initPos && currPos >= 150) {
        navbar.classList.add("bg-fade", "toggle-effect");
        initPos = currPos;
      } else if (currPos < 150) {
        navbar.classList.remove("bg-fade", "toggle-effect");
      } else {
        navbar.classList.remove("toggle-effect");
        initPos = currPos;
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="navbar">
      <div className="nav__container">
        <a href="/">
          <img className="nav-logo" src="/images/hrdkLogo.svg" alt="logo" />
        </a>
        <div className="nav-items">
          <a href="/#chat-with-me">About</a>
          <a href="/#my-projects">Projects</a>
          <a href="/#connect-now">Connect Now</a>
        </div>
      </div>
      <img className="nav-bottom" src="/images/NavBottom.svg" alt="" />
    </div>
  );
};
