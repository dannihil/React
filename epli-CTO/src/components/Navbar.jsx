import React from "react";
import { FaUser, FaFacebook } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
  const logo = "/assets/thumbnail_Epli_logo_invert.png";
  const userIcon = "/assets/user_icon.png";

  return (
    <div className="navbar">
      <div>
        <a href="#">
          <img src={logo} alt="Logo" style={{ width: 69, marginLeft: 19 }} />
        </a>
      </div>
      <div>
        <ul className="navbar-links">
          <li className="nav-link">
            <a href="https://www.epli.is" className="nav-link-button">
              Macbook Air
            </a>
          </li>
          <li className="nav-link">
            <a href="https://www.epli.is" className="nav-link-button">
              Macbook Pro
            </a>
          </li>
          <li className="nav-link">
            <a href="https://www.epli.is" className="nav-link-button">
              Mac mini
            </a>
          </li>
          <li className="nav-link">
            <a href="https://www.epli.is" className="nav-link-button">
              iMac
            </a>
          </li>
          <li className="nav-link">
            <a href="https://www.epli.is" className="nav-link-button">
              Mac studio
            </a>
          </li>
          <li className="nav-link">
            <a href="https://www.epli.is" className="nav-link-button">
              Mac Pro
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a href="https://www.epli.is/minar-sidur">
          <FaUser
            className="user-icon"
            style={{ width: 30, height: "100%", marginRight: 10 }}
          />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
