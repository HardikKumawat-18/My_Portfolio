import "./home.scss";
import { InterestCard, ProjectCard } from "../../components";
import { interestsData, projectsData } from "../../data";

export const Home = () => {
  return (
    <div className="home">
      <div className="max-w-container">
        <section id="intro" className="intro">
          <h6 className="red-text">HELLO THERE,</h6>
          <h1 className="title">I'm Hardik.</h1>
          <h6 className="vsmalltext">Visual Designer</h6>

          <p className="sub-title">
            I'm a visual designer based in Mumbai, India with experience in
            delivering end-to-end UX/UI design for software products. I'm
            passionate about improving the lives of others through design and am
            constantly looking to learn new things everyday.
          </p>

          <button className="std-btn red">More About Me!</button>

          <span className="tag-line">
            I Create better experience for{" "}
            <span className="slashed-out">Users</span>
            <span className="floating-text">People</span>
          </span>
        </section>

        <section id="chat-with-me" className="chat-with-me">
          <div className="overlay-title-container">
            <img
              className="bg-logo"
              src="./images/AboutBg.svg"
              alt="AboutLogo"
            />
            <span className="overlay-title">Chat with me about..</span>
          </div>

          <div className="interest-card-container">
            {interestsData.map((item, index) => {
              return <InterestCard cardData={item} key={index} />;
            })}
          </div>
        </section>

        <section id="my-projects" className="my-projects">
          <div className="overlay-title-container">
            <img
              className="bg-logo"
              src="./images/UI-UX-logo.svg"
              alt="AboutLogo"
            />
            <span className="overlay-title">My Projects</span>
          </div>

          <div className="project-card-container">
            {projectsData.map((item, index) => {
              return <ProjectCard cardData={item} key={index} />;
            })}
          </div>
        </section>

        <section id="contact-me" className="contact-me">
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
                  <div onClick={() => {
                    document.querySelector(".toggle-track").classList.toggle("active");
                  }} className="toggle-btn"></div>
                </div>

                <img
                  className="wiggly-arrow"
                  src="./images/wiggly-arrow.png"
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
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div className="form-input">
                  <span>Email Address:</span>
                  <input type="text" placeholder="Enter your email address" />
                </div>
                <div className="form-input">
                  <span>Write A Message:</span>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div>
                  <button className="std-btn">
                    <img
                      className="wifi-mini-logo"
                      src="./images/WiFiLogo.svg"
                      alt="WiFiLogo"
                    />
                    Connect Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
