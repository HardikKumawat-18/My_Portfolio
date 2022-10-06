import "../Navbar/navbar.scss";
import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="nav__container">
        Email
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
