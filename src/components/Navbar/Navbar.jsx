import "./navbar.scss";
import { useEffect, useRef, useState } from "react";
import { projectsData } from "../../data";
import { camelCase } from "lodash";
import { useParams } from "react-router-dom";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";

export const Navbar = () => {
  const { projectName } = useParams();
  const [navBool, setNavBool] = useState(false);
  const nav = useRef(null);
  const navItems = useRef(null);

  const openNavMobile = () => {
    setNavBool(!navBool);
    navItems?.current?.classList.add(`open`);
  };
  const closeNavMobile = () => {
    setNavBool(!navBool);
    navItems?.current?.classList.remove(`open`);
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
        <div className="nav-items" ref={navItems}>
          <span className="nav-item">
            <a href="/">
              Home
              <div className="bot-border"></div>
            </a>
          </span>
          {!projectName && (
            <span className="nav-item">
              <a href="#chat-with-me" onClick={closeNavMobile}>
                About
                <div className="bot-border"></div>
              </a>
            </span>
          )}
          <span className="nav-item dropdown-container">
            <a href="#my-projects">
              <span style={{ display: "-webkit-flex", alignItems: "center" }}>
                Projects
                <BsChevronDown style={{ marginLeft: "7px" }} />
              </span>
              <div className="bot-border"></div>
            </a>

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
            <a href="#connect-now" onClick={closeNavMobile}>
              Connect Now
              <div className="bot-border"></div>
            </a>
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
