import "./projectinfo.scss";
import { useParams } from "react-router-dom";

export const ProjectInfo = () => {
  let { id } = useParams();
  console.log(id);

  return <div className="project-info">Project Info</div>;
};
