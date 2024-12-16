import React from "react";
import "../css/Home.css";
import { useNavigate } from "react-router-dom";

import { FaApple } from "react-icons/fa";
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

function Home() {
  const navigate = useNavigate();
  const logo = "/assets/logo.png";

  const { isSignedIn, user } = useUser();

  return (
    <div className="content">
      <div
        style={{
          paddingBottom: 20,
        }}
      >
        <img
          src="/assets/line-up.png"
          draggable="false"
          style={{ width: 1000 }}
        />
      </div>
      <SignedIn>
        <div>
          <h1
            className="title"
            style={{
              fontSize: "60px",
              fontWeight: 900,
              paddingBottom: 0,
            }}
          >
            Epli
          </h1>
          <h2
            className="title"
            style={{
              fontSize: "40px",
              paddingBottom: 30,
            }}
          >
            Sérpöntunarvefur
          </h2>
          <button onClick={() => navigate("/getting-started")}>Panta</button>
        </div>
      </SignedIn>
      <SignedOut>
        <div>
          <h1
            className="title"
            style={{
              fontSize: "40px",
              paddingBottom: 0,
            }}
          >
            Skráðu þig inn til þess að panta
          </h1>
          <div className="forms" style={{ paddingBottom: 100 }}>
            <SignInButton style={{ marginRight: 15 }} />
            <SignUpButton style={{}} />
          </div>
          <div className="paragraph">
            <p
              style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </SignedOut>
    </div>
  );
}

export default Home;
