import "./navbar.scss";
import { useEffect, useRef, useState } from "react";
import { projectsData } from "../../data";
import { camelCase } from "lodash";
import { useParams } from "react-router-dom";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";

export const Navbar = () => {
  const { projectName } = useParams();
  const [dropDownBool, setDropDownBool] = useState(false);
  const itemContainer = useRef(null);
  const navContainer = useRef(null);
  const nav = useRef(null);
  const innerDropContainer = useRef(null);

  useEffect(() => {
    let navbar = document.querySelector(".navbar");
    let initPos = 0;
    const handleScroll = () => {
      let currPos = window.scrollY;
      if (currPos > initPos && currPos >= 150) {
        navbar.classList.add("bg-fade");
        initPos = currPos;
      } else if (currPos < 150) {
        navbar.classList.remove("bg-fade");
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
    <div className="navbar" ref={nav}>
      <div className="nav__container" ref={navContainer}>
        <a href="/">
          <img className="nav-logo" src="/images/hrdkLogo.svg" alt="logo" />
        </a>
        <div className="nav-item-container" ref={itemContainer}>
          <a
            className="nav-item"
            href="/"
            onClick={() => {
              setDropDownBool(false);
            }}
          >
            Home
            <div className="bot-border"></div>
          </a>
          {!projectName && (
            <a
              className="nav-item"
              href="#chat-with-me"
              onClick={() => {
                setDropDownBool(false);
              }}
            >
              About
              <div className="bot-border"></div>
            </a>
          )}
          <div className="dropdown-container" ref={innerDropContainer}>
            <a
              className="nav-item"
              href="#my-projects"
              onClick={() => {
                setDropDownBool(false);
              }}
            >
              Projects
              <div className="bot-border"></div>
            </a>
            <div className="dropdown">
              {projectsData.map((item, index) => {
                return (
                  <a
                    href={`/project/${item.projectType}/${camelCase(
                      item.title.toLowerCase()
                    )}`}
                    className="nav-item"
                    key={index}
                  >
                    {item.title}
                    <div className="bot-border"></div>
                  </a>
                );
              })}
            </div>
          </div>
          <a
            className="nav-item"
            href="#connect-now"
            onClick={() => {
              setDropDownBool(false);
            }}
          >
            Connect Now
            <div className="bot-border"></div>
          </a>
        </div>
        {dropDownBool ? (
          <HiOutlineMenuAlt3
            className="hamburger-menu"
            onClick={() => {
              setDropDownBool(!dropDownBool);
              itemContainer.current.classList.remove(`show`);
              nav.current.classList.remove(`open`);
            }}
          />
        ) : (
          <HiOutlineMenuAlt2
            className="hamburger-menu"
            onClick={() => {
              setDropDownBool(!dropDownBool);
              itemContainer.current.classList.add(`show`);
              nav.current.classList.add(`open`);
            }}
          />
        )}
      </div>
    </div>
  );
};
