import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";
import {projects} from "../../projects";

export default function Projects() {
  console.log(projects);
  const projectsList = projects.map((project, idx) => <ProjectCard project={project} key={idx} />)
  return (
    <div className="Projects">
      <h1>Projects</h1>
      {projectsList}
    </div>
  );
}