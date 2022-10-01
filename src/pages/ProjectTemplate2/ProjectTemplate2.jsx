import "./projecttemplate2.scss";
import { ConnectNow } from "../../components";
import { useParams } from "react-router-dom";
import { projects } from "../../data";
import { useEffect } from "react";

export const ProjectTemplate2 = () => {
  const { projectName } = useParams();
  const { interactionMotion } = projects;
  const { [projectName]: projectData } = interactionMotion;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectData]);

  return (
    projectData && (
      <div className="project-info">
        <div className="max-w-container">
          <section id="intro" className="intro">
            <div className="flex-container">
              <div className="left">
                <img
                  className="logo"
                  src={
                    projectData.projectLogoImg
                      ? `/images/${projectData.projectLogoImg}`
                      : projectData.projectLogoURL
                  }
                  alt="logo"
                />
                <h1 className="title">{projectData.projectTitle}</h1>
                <h2 className="sub-title">{projectData.subTitle}</h2>
              </div>
              <img
                className="mock-img"
                src={
                  projectData.mockImg
                    ? `/images/${projectData.mockImg}`
                    : projectData.mockURL
                }
                alt="project mock"
              />
            </div>
          </section>

          <section id="over-view" className="over-view">
            <div className="flex-container">
              {projectData.projectOverview.map((item, index) => {
                return (
                  <div key={index} className="content-box">
                    <div className="sub-title">{item.title}</div>
                    <div className="desc">
                      {item.desc
                        ? item.desc
                        : item.roles.map((role, index) => {
                            return (
                              <p key={index} className="desc">
                                {role}
                                <br />
                                <br />
                              </p>
                            );
                          })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="screens" className="screens">
            <h2 className="sub-title">High Fidelity Screens</h2>
            <div className="screens-container">
              {projectData.highFidelityPrototype.map((prototype, index) => {
                return (
                  <img
                    className="screen"
                    src={`/images/high-fidelity-prototypes/${prototype}`}
                    alt="high-fidelity-prototypes"
                    key={index}
                  />
                );
              })}
            </div>
          </section>

          <section id="motion-design" className="motion-design">
            <div className="container">
              <div className="left">
                <h1 className="title">
                  <span>Motion</span>
                  <br />
                  Design
                </h1>
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium tempora totam similique. Delectus vero earum quos
                  corrupti dignissimos voluptatum est error tempora quis cumque!
                </p>
              </div>
              <div className="right">
                <div className="mobile-wrapper">
                  <img
                    className="mobile-mockup"
                    src="/images/Iphone.png"
                    alt="Iphone Mockup"
                  />
                  <iframe
                    title={projectData.videoTitle}
                    className="video"
                    width="320"
                    height="670"
                    src="https://www.youtube.com/embed/atXD0R9XE1I"
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          <ConnectNow />
        </div>
      </div>
    )
  );
};
