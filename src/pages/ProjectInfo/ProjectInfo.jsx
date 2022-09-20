import "./projectinfo.scss";
import {
  ConnectNow,
  FeedbackCard,
  Carousel,
  CarouselItem,
} from "../../components";
import { useParams } from "react-router-dom";
import { projects } from "../../data";

export const ProjectInfo = () => {
  const { id } = useParams();
  const { [id]: projectData } = projects;

  return (
    <div className="project-info">
      <div className="max-w-container">
        <section id="intro" className="intro">
          <div className="flex-container">
            <div className="left">
              <img className="logo" src="/images/DocupLogo.png" alt="logo" />
              <h1 className="title">{projectData.projectTitle}</h1>
              <h2 className="sub-title">{projectData.subTitle}</h2>
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

        <section id="design-process" className="design-process">
          <h2 className="sub-title">My Design Process</h2>
          <Carousel>
            {projectData.designProcess.map((item, index) => {
              let { pictureImg } = item;
              return (
                <CarouselItem key={index}>
                  <img
                    className="carousel-img"
                    src={`/images/${pictureImg}`}
                    alt=""
                  />
                </CarouselItem>
              );
            })}
          </Carousel>

          <h2 className="sub-title">User Research</h2>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta
            earum saepe architecto sed magnam illum deleniti dolore delectus qui
            voluptate veritatis, repellat, ipsum assumenda, amet quisquam quos
            blanditiis doloribus.
          </p>

          <h2 className="sub-title">Problem Identification</h2>
          <div className="flex-container">
            <div>
              {/* <img src="" alt="" /> */}
              <p className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt natus facere vitae accusantium praesentium esse
                dignissimos maiores ad hic quam?
              </p>
            </div>
            <div>
              {/* <img src="" alt="" /> */}
              <p className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt natus facere vitae accusantium praesentium esse
                dignissimos maiores ad hic quam?
              </p>
            </div>
            <div>
              {/* <img src="" alt="" /> */}
              <p className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt natus facere vitae accusantium praesentium esse
                dignissimos maiores ad hic quam?
              </p>
            </div>
          </div>

          <h2 className="sub-title">User Journey</h2>
          <img
            className="user-journey-img"
            src="/images/DocUpUserJourney.png"
            alt="User Journey"
          />
        </section>

        <section id="prototyping" className="prototyping">
          <h2 className="sub-title">Prototyping</h2>
          <h2 className="sub-title">Wireframes</h2>
          <h2 className="sub-title">High Fidelity Prototype</h2>
          <h2 className="sub-title">Prototype Feedback</h2>
          <div className="feedback-container">
            <FeedbackCard />
          </div>
        </section>

        <ConnectNow />
      </div>
    </div>
  );
};
