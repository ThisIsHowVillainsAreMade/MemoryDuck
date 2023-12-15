import CyberQuack from "../assets/CyberQuack.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbarDiv">
      <img src={CyberQuack} id="logo" />
      <ul className="navbarUl">
        <li id="titleGame">MEMORYDUCK</li>
        <li id="about">A PROPOS</li>
      </ul>
    </div>
  );
}

export default Navbar;
