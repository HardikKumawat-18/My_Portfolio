import "../Navbar/navbar.scss";
import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="nav__container">
        <a href="/">
          <img className="nav-logo" src="/images/hrdkLogo.svg" alt="logo" />
        </a>
        <div className="nav-items">
          <a href="/#chat-with-me">About</a>
          <a href="/#my-projects">Projects</a>
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
