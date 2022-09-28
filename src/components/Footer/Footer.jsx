import "../Navbar/navbar.scss";
import "./footer.scss";

export const Footer = () => {
  const handleScrollTop = (duration) => {
    // cancel if already on top
    if (document.scrollingElement.scrollTop === 0) return;

    const cosParameter = document.scrollingElement.scrollTop / 2;
    let scrollCount = 0,
      oldTimestamp = null;

    function step(newTimestamp) {
      if (oldTimestamp !== null) {
        // if duration is 0 scrollCount will be Infinity
        scrollCount += (Math.PI * (newTimestamp - oldTimestamp)) / duration;
        if (scrollCount >= Math.PI)
          return (document.scrollingElement.scrollTop = 0);
        document.scrollingElement.scrollTop =
          cosParameter + cosParameter * Math.cos(scrollCount);
      }
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  };

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
          onClick={() => handleScrollTop(500)}
        />
        <h5 className="copy-right">&copy;Hardik Kumawat</h5>
      </div>
    </div>
  );
};
