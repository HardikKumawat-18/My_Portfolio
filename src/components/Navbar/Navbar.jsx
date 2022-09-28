import "./navbar.scss";
import { useEffect } from "react";
import { projectsData } from "../../data";
import { camelCase } from "lodash";
import { useParams } from "react-router-dom";

export const Navbar = () => {
  const { projectName } = useParams();

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
        <div className="nav-item-container">
          {!projectName && (
            <a className="nav-item" href="/#chat-with-me">
              About
              <div className="bot-border"></div>
            </a>
          )}
          <div className="dropdown-container">
            <a className="nav-item" href="/#my-projects">
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
          <a className="nav-item" href="#connect-now">
            Connect Now
            <div className="bot-border"></div>
          </a>
        </div>
      </div>
    </div>
  );
};
