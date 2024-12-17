import React, { useState } from "react";
import "../css/Home.css";
import { useNavigate } from "react-router-dom";

import { FaPlusCircle } from "react-icons/fa";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignUp,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import FlipCard from "../components/FlipCard";

function Home() {
  const navigate = useNavigate();
  const logo = "/assets/logo.png";

  const { isSignedIn, user } = useUser();

  return (
    <div className="content">
      <SignedIn>
        <div className="home-top-component-signedin">
          <h1 className="title">Sérpöntunarvefur</h1>
          <img
            className="home-top-image"
            src="/assets/line-up.png"
            draggable="false"
          />
          <button
            className="order-button"
            onClick={() => navigate("/getting-started")}
          >
            Panta
          </button>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="home-top-component">
          <h1 className="title">Sérpöntunarvefur</h1>
          <img
            className="home-top-image"
            src="/assets/line-up.png"
            draggable="false"
          />
        </div>
        <div className="login-component">
          <h1 className="login-signup-h1">Skráðu þig inn til þess að byrja</h1>
          <div className="forms">
            <SignInButton
              className="login-signup-buttons"
              style={{ marginRight: 15, marginBottom: 30 }}
            >
              Innskráning
            </SignInButton>
            <SignUpButton
              className="login-signup-buttons"
              style={{ marginBottom: 30 }}
            >
              Nýskráning
            </SignUpButton>
          </div>
        </div>
        <div className="flips">
          <FlipCard
            title="Hvað get ég pantað?"
            description="Ekki síma allavega! 🖕🏿"
            imageUrl="https://www.epli.is/media/cfhln5ff/eydimerkur-titan-128gb.png?width=940&height=830&mode=boxfit&bgcolor=ffffff"
          />
          <FlipCard
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio
            velit, faucibus nec vulputate ut, lacinia sit amet dolor. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Nullam felis sem, tincidunt mollis convallis a,"
            imageUrl="https://www.epli.is/media/cfhln5ff/eydimerkur-titan-128gb.png?width=940&height=830&mode=boxfit&bgcolor=ffffff"
          />
        </div>
      </SignedOut>
    </div>
  );
}

export default Home;
