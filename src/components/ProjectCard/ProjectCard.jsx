import {Link} from "react-router-dom";
import "./ProjectCard.css";

export default function ProjectCard({project}) {
  const techList = project.tech.map(t => <p>{t}</p>);
  return (
    <div className="ProjectCard">
      <div className="title-container">
        <div className="logo-img"></div>
        <h2>{project.title}</h2>
      </div>
      <div className="flex-row">
        <div className="descr">
          <p>{project.description}</p>
          <div className="links">
            <Link to={project.github}>Github</Link>
            <Link to={project.deployed}>Deployed</Link>
          </div>
        </div>
        <div className="img-container">
          <img src={project.img} className="project-img"></img>
        </div>
      </div>
      <div className="tech">
        {techList}
      </div>
    </div>
  );
}