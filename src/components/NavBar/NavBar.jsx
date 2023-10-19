import { Link } from "react-router-dom";
import "./NavBar.css";



export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="logo">
        <h2><Link to="/">Lana Uzbekova</Link></h2>
        <div className="logo-img"></div>
      </div>
      <Link to="/">Home</Link>
      <Link to="/about">About me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contacts">Contacts</Link>
    </div>
  );
}