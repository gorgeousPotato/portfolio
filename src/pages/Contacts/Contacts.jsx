import { Link } from "react-router-dom";
import "./Contacts.css"

export default function Contacts() {
  return (
    <div className="Contacts">
      <h1>Contacts</h1>
      <h3>I will be happy to talk to you</h3>
      <div className="contact">
        <i class="fa-brands fa-linkedin"></i>
        <Link to="https://www.linkedin.com/in/lana-uzbekova/">LinkedIn</Link>
      </div>
      <div className="contact">
        <i class="fa-brands fa-github"></i>
        <Link to="https://github.com/gorgeousPotato/">GitHub</Link>
      </div>
      <p>Or I can be reached at lanauzbekov@gmail.com</p>
    </div>
  );
}