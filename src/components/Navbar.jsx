import { Link } from "react-router-dom";
import CyberQuack from "../assets/CyberQuack.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbarDiv">
      <img src={CyberQuack} id="logo" />
      <ul className="navbarUl">
        <li id="titleGame">
          <Link to="/" className="link">
            MEMORYDUCK
          </Link>
        </li>
        <li id="about">
          <Link to="/a-propos" className="link">
            A PROPOS
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
