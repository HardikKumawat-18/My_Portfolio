import "../Navbar/navbar.scss";
import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="nav__container">
        <a className="nav__email" href="mailto:hardik.kumawat007@gmail.com">
          hardik.kumawat007@gmail.com
        </a>
        <h5 className="copy-right">&copy;Hardik Kumawat</h5>
      </div>
    </div>
  );
};
