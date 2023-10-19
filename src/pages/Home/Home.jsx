import {Link} from "react-router-dom"
import "./Home.css"

export default function Home() {
  return (
    <div className="Home">
      <div className="title">
        <h1>Hi! I'm Lana</h1>
        <div className="logo-img"></div>
      </div>
      <h3>a full-stack developer passionate about solving complex problems.</h3>
      <div className="home-links">
        <Link to="/about">About me</Link>
        <Link to="/projects">My projects</Link>
      </div>
    </div>
  );
}