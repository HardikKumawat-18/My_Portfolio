import "./projectinfo.scss";
// import { useParams } from "react-router-dom";

export const ProjectInfo = () => {
  return (
    <div className="project-info">
      <div className="max-w-container">
        <section id="intro" className="intro">
          <div className="flex-container">
            <div className="left">
              <img className="logo" src="/images/DocupLogo.png" alt="logo" />
              <h1 className="title">DocUp</h1>
              <h2 className="sub-title">UI/UX Case Study</h2>
            </div>
            <img
              className="mock-img"
              src="/images/DocupMock.png"
              alt="Docup Mock"
            />
          </div>
        </section>

        <section id="over-view" className="over-view">
          <div className="flex-container">
            <div>
              <div className="content-box"></div>
              <div className="content-box"></div>
            </div>
            <div>
              <div className="content-box"></div>
              <div className="content-box"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
