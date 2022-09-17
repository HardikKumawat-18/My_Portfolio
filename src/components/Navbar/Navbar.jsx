import "./navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav__container">
        <Link to="/">
          <img className="nav-logo" src="./images/hrdkLogo.svg" alt="logo" />
        </Link>
        <div className="nav-items">
          <Link to="/#chat-with-me">About</Link>
          <Link to="/#my-projects">Projects</Link>
          <Link to="/#connect-now">Connect Now</Link>
        </div>
      </div>
      <img className="nav-bottom" src="./images/NavBottom.svg" alt="" />
      <h4 className="nav-comment">"Navbar"</h4>
    </div>
  );
};
