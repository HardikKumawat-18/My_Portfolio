import "./connectnow.scss";

export const ConnectNow = () => {
  return (
    <section id="connect-now" className="connect-now">
      <div className="contact-form">
        <div className="wifi-symbol">
          <div className="wifi-circle first"></div>
          <div className="wifi-circle second"></div>
          <div className="wifi-circle third"></div>
          <div className="wifi-circle fourth"></div>
        </div>
        <div className="content">
          <div className="upper">
            <div
              onClick={(e) => {
                e.target.classList.toggle(`active`);
                document.querySelector(".form").classList.toggle("active");
              }}
              className="toggle-track"
            >
              <div
                onClick={() => {
                  document
                    .querySelector(".toggle-track")
                    .classList.toggle("active");
                }}
                className="toggle-btn"
              ></div>
            </div>

            <img
              className="wiggly-arrow"
              src="/images/wiggly-arrow.png"
              alt="wiggly-arrow"
            />

            <h3>Toggle!</h3>
          </div>
          <div className="lower">
            <h2 className="title">
              Toggle to Connect to a{" "}
              <span className="blue-text">Amazing Network!</span>
            </h2>
            <h3 className="sub-title">
              Want to connect? <br />
              Drop me a line!
            </h3>
          </div>
          <div className="form">
            <div className="form-input">
              <span>Name:</span>
              <input type="text" placeholder="Name" />
            </div>
            <div className="form-input">
              <span>Email Address:</span>
              <input type="text" placeholder="Email address" />
            </div>
            <div className="form-input">
              <span>Write A Message:</span>
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="std-btn">
              <img
                className="wifi-mini-logo"
                src="/images/WiFiLogo.svg"
                alt="WiFiLogo"
              />
              Connect Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
