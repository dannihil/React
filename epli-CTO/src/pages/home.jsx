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
  useClerk,
} from "@clerk/clerk-react";
import FlipCard from "../components/FlipCard";

function Home() {
  const navigate = useNavigate();
  const logo = "/assets/logo.png";

  const { isSignedIn, user } = useUser();

  const { openSignIn } = useClerk();

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
        <div className="loggedin-component">
          <h1 className="greeting-h1">Hæ {user?.firstName}!</h1>
          <div className="flips">
            <FlipCard
              title="MacBook Air"
              description="Hér getur þú pantað glænýja MacBook Pro með M4 örgjörvanum"
              imageUrl="https://www.epli.is/media/mnkb0mgz/macbook_pro_14-in_m3_pro_silver_pure_front_macbook_pro_16-in_m3_pro_space_black_pure_back_2-up_screen__usen.png?width=840&height=240&mode=boxfit&bgcolor=ffffff"
            />
            <FlipCard
              title="MacBook Pro"
              description="Hér getur þú pantað glænýja MacBook Pro með M4 örgjörvanum"
              imageUrl="https://www.epli.is/media/mnkb0mgz/macbook_pro_14-in_m3_pro_silver_pure_front_macbook_pro_16-in_m3_pro_space_black_pure_back_2-up_screen__usen.png?width=840&height=240&mode=boxfit&bgcolor=ffffff"
            />
          </div>
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
              mode="modal"
              className="login-signup-buttons"
              style={{ marginRight: 15, marginBottom: 30 }}
            >
              Innskráning
            </SignInButton>
            <SignUpButton
              mode="modal"
              className="login-signup-buttons"
              style={{ marginBottom: 30 }}
            >
              Nýskráning
            </SignUpButton>
          </div>
        </div>
        <div className="flips">
          <FlipCard
            title="Mac Mini"
            description="Fáranlega hröð smátölva!"
            imageUrl="/assets/mac_mini.png"
          />
          <FlipCard
            title="MacBook Pro"
            description="MacBook Pro með splunkunýjum M4 örgjörva!"
            imageUrl="/assets/mbp_16_SL.png"
          />
        </div>
      </SignedOut>
    </div>
  );
}

export default Home;
