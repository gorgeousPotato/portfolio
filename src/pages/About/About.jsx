import {skills} from "../../skills"
import "./About.css"

export default function About() {
  const skillList = skills.map(skill => (
    <div className="skill">
      <h5>{skill.title}</h5>
      <i className={skill.icon}></i>
    </div>
  ))
  return (
    <div className="About">
      <h1>About me</h1>
      <div className="description">
        <div className="photo"></div>
        <p>I am a Software Engineer passionate about solving complex problems. I thrive on continuous learning and adapting to the ever-evolving landscape of software development. I am eager to apply my problem-solving and analytical thinking abilities to contribute to building responsive and adaptive web applications. And though coding is my main passion, I also have other hobbies - reading books, running, and knitting.</p>
      </div>
      <div className="skills-container">
        <h3>My skills</h3>
        <div className="skills"> 
          {skillList}
        </div>
      </div>
    </div>
  );
}
