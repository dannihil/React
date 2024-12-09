import React from "react";
import { FaUser } from "react-icons/fa";
import "../css/NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const logo = "/assets/thumbnail_Epli_logo_invert.png";
  const userIcon = "/assets/user_icon.png";

  return (
    <div className="navbar">
      <div>
        <Link to="/" className="nav-link">
          <img src={logo} alt="Logo" style={{ width: 69, marginLeft: 19 }} />
        </Link>
      </div>
      <div>
        <ul className="navbar-links">
          <Link to="/macbook-air" className="nav-link-button">
            Macbook Air
          </Link>
          <Link to="/macbook-pro" className="nav-link-button">
            Macbook Pro
          </Link>
          <Link to="/mac-mini" className="nav-link-button">
            Mac mini
          </Link>
          <Link to="/imac" className="nav-link-button">
            iMac
          </Link>
          <Link to="/mac-studio" className="nav-link-button">
            Mac studio
          </Link>
          <Link to="/mac-pro" className="nav-link-button">
            Mac Pro
          </Link>
        </ul>
      </div>
      <div>
        <a href="https://www.epli.is/minar-sidur">
          <FaUser
            className="user-icon"
            style={{
              width: 30,
              height: "100%",
              marginRight: 10,
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
