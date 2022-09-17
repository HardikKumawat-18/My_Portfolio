import "./projectcard.scss";

export const ProjectCard = ({ cardData }) => {
  const {
    thumbnailURL,
    thumbnailImg,
    logoURL,
    logoImg,
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
        <h3 className="project-title">{title}</h3>
        <h4 className="project-sub-title">{Subtitle}</h4>
        <p className="desc">{description}</p>
        <button className="std-btn" style={{ backgroundColor: btnColor }}>
          View Project
        </button>
      </div>
    </div>
  );
};
