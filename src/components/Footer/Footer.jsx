import "../Navbar/navbar.scss";
import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="nav__container">
        <a href="/">
          <img className="nav-logo" src="/images/hrdkLogo.svg" alt="logo" />
        </a>
        <div className="nav-item-container">
          <a className="nav-item" href="/#chat-with-me">
            About
            <div className="bot-border"></div>
          </a>
          <a className="nav-item" href="/#my-projects">
            Projects
            <div className="bot-border"></div>
          </a>
        </div>
        <img
          className="scroll-top"
          src="/images/backToTop.svg"
          alt="backToTop"
          onClick={() => window.scrollTo(0, 0)}
        />
        <h5 className="copy-right">&copy;Hardik Kumawat</h5>
      </div>
    </div>
  );
};
