import "./HamburgerMenu.css";
import {useState} from "react";
import { Link } from "react-router-dom";

export default function HamburgerMenu({handleLogout}) {
  const [isActive, setIsActive] = useState(false);
 
  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <div className="HmburgerMenu">
      <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={handleClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isActive && (
        <div className="burger-menu-links">
          <Link onClick={handleClick} to="/">Home</Link>
          <Link onClick={handleClick} to="/about">About me</Link>
          <Link onClick={handleClick} to="/projects">Projects</Link>
          <Link onClick={handleClick} to="/contacts">Contacts</Link>
        </div>
      )}
    </div>
    
  );
}