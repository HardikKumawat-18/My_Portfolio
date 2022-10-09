import { useRef } from "react";
import "./connectnow.scss";
import emailjs from "@emailjs/browser";
import env from "react-dotenv";

export const ConnectNow = () => {
  let form = useRef(null);
  let connectNow = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(env.SERVICE_ID, env.TEMPLATE_ID, form.current, env.PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="connect-now" className="connect-now" ref={connectNow}>
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
                form.current.scrollIntoView();
              }}
              className="toggle-track"
            >
              <div
                onClick={() => {
                  document
                    .querySelector(".toggle-track")
                    .classList.toggle("active");
                  form.current.scrollIntoView();
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
          <form className="form" ref={form} onSubmit={sendEmail}>
            <div className="form-input">
              <span>Name:</span>
              <input type="text" placeholder="Name" name="user_name" />
            </div>
            <div className="form-input">
              <span>Email Address:</span>
              <input
                type="text"
                placeholder="Email address"
                name="user_email"
              />
            </div>
            <div className="form-input">
              <span>Write A Message:</span>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="std-btn" type="submit">
              <img
                className="wifi-mini-logo"
                src="/images/WiFiLogo.svg"
                alt="WiFiLogo"
              />
              Connect Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
