import React from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import "../css/NavBar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

function NavBar() {
  const logo = "/assets/thumbnail_Epli_logo_invert.png";
  const userIcon = "/assets/user_icon.png";

  const navigate = useNavigate();

  const { isSignedIn, user } = useUser();

  return (
    <div className="navbar">
      <div>
        <Link to="/" className="nav-link">
          <img
            src={logo}
            alt="Logo"
            style={{ width: 60, marginLeft: 19 }}
            draggable="false"
          />
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
        <SignedIn>
          <Link to="/login">
            <UserButton userProfileUrl="/login" userProfileMode="navigation" />
          </Link>
        </SignedIn>
        <SignedOut>
          <Link to="/login">
            <FaUser
              className="icon"
              style={{
                width: 30,
                height: "100%",
              }}
            />
          </Link>
        </SignedOut>
        <FaShoppingCart
          className="icon"
          style={{
            width: 30,
            height: "100%",
            marginRight: 20,
            marginLeft: 25,
          }}
        />
      </div>
    </div>
  );
}

export default NavBar;
