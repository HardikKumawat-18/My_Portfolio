import "./projectcard.scss";
import { useNavigate } from "react-router-dom";

export const ProjectCard = ({ cardData }) => {
  let navigate = useNavigate();

  const {
    thumbnailURL,
    thumbnailImg,
    logoURL,
    logoImg,
    projectType,
    title,
    Subtitle,
    description,
    btnColor,
  } = cardData;

  return (
    <div className="project-card">
      <img
        className="project-img"
        src={thumbnailURL || `./images/${thumbnailImg}`}
        alt="Project-Thumbnail"
      />

      <div className="content">
        <img
          className="project-logo"
          src={logoURL || `./images/${logoImg}`}
          alt="project-logo"
        />
        <h3 className="title">{title}</h3>
        <h4 className="project-sub-title">{Subtitle}</h4>
        <p className="desc">{description}</p>
        <button
          onClick={() => {
            navigate(`project/${projectType}/${title.toLowerCase()}`);
          }}
          className="std-btn"
          style={{ backgroundColor: btnColor }}
        >
          View Project
        </button>
      </div>
    </div>
  );
};
