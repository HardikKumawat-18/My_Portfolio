import "./navbar.scss";
import { useEffect, useRef, useState } from "react";
import { projectsData } from "../../data";
import { camelCase } from "lodash";
import { useParams } from "react-router-dom";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";

export const Navbar = () => {
  const { projectName } = useParams();
  const [navBool, setNavBool] = useState(false);
  const nav = useRef(null);

  const openNavMobile = () => {
    setNavBool(!navBool);
    nav?.current?.classList.add(`open`);
  };
  const closeNavMobile = () => {
    setNavBool(!navBool);
    nav?.current?.classList.remove(`open`);
  };

  useEffect(() => {
    let initPos = 0;
    const handleScroll = () => {
      let currPos = window.scrollY;
      if (currPos > initPos && currPos >= 160) {
        nav.current.classList.add("bg-white");
        initPos = currPos;
      } else if (currPos < 160) {
        nav.current.classList.remove("bg-white");
      } else {
        initPos = currPos;
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav className="navbar" ref={nav}>
      <div className="nav__container">
        <a href="/">
          <img src="/images/hrdkLogo.svg" alt="" className="logo" />
        </a>
        <div className="nav-items">
          <span className="nav-item">
            <a href="/">Home</a>
            <div className="bot-border"></div>
          </span>
          {!projectName && (
            <span className="nav-item">
              <a href="#chat-with-me">About</a>
              <div className="bot-border"></div>
            </span>
          )}
          <span className="nav-item dropdown-container">
            <a href="#my-projects">Projects</a>
            <div className="bot-border"></div>
            <div className="nav-dropdown">
              {projectsData.map((project, index) => {
                return (
                  <span className="nav-item" key={index}>
                    <a
                      href={`/project/${project.projectType}/${camelCase(
                        project.title.toLowerCase()
                      )}`}
                    >
                      {project.title}
                    </a>
                  </span>
                );
              })}
            </div>
          </span>
          <span className="nav-item">
            <a href="#connect-now">Connect Now</a>
            <div className="bot-border"></div>
          </span>
        </div>

        {navBool ? (
          <HiOutlineMenuAlt2
            className="hamburger-icon"
            onClick={closeNavMobile}
          />
        ) : (
          <HiOutlineMenuAlt3
            className="hamburger-icon"
            onClick={openNavMobile}
          />
        )}
      </div>
    </nav>
  );
};
