import { Link } from "react-router-dom";
import "../Navbar/navbar.scss";
import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="nav__container">
        <Link to="/">
          <img className="nav-logo" src="/images/hrdkLogo.svg" alt="logo" />
        </Link>
        <div className="nav-items">
          <Link to="/#chat-with-me">About</Link>
          <Link to="/#my-projects">Projects</Link>
        </div>
        <img
          className="scroll-top"
          src="/images/backToTop.svg"
          alt="backToTop"
          onClick={() => {
            console.log(window.scrollTo(0, 0));
          }}
        />
        <h5 className="copy-right">&copy;Hardik Kumawat</h5>
      </div>
    </div>
  );
};
