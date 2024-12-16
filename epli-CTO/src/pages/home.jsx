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
      <div className="home-top-component">
        <h1 className="title">Sérpöntunarvefur</h1>
        <img
          className="home-top-image"
          src="/assets/line-up.png"
          draggable="false"
        />
      </div>
      <SignedIn>
        <div className="home-top-component">
          <img
            className="home-top-image"
            src="/assets/line-up.png"
            draggable="false"
          />
          <h1 className="title">Sérpöntunarvefur</h1>
          <button
            className="order-button"
            onClick={() => navigate("/getting-started")}
          >
            Panta
          </button>
        </div>
        <div className="paragraph">
          <p className="intro-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio
            velit, faucibus nec vulputate ut, lacinia sit amet dolor. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Nullam felis sem, tincidunt mollis convallis a,
            venenatis ut ante. Quisque sodales, lacus eget lobortis aliquam,
            tortor dolor sodales erat, quis interdum magna erat sit amet lorem.
            Nam ut neque vel lectus dictum viverra a id risus. Fusce hendrerit,
            risus eu suscipit cursus, felis augue pretium enim, ac blandit velit
            libero sit amet diam. Donec porta, magna at consequat sollicitudin,
            dui felis accumsan nisl, eu aliquet ligula lorem id eros. Aenean
            elementum mauris non nunc commodo, vel hendrerit tortor bibendum.
            Phasellus augue lacus, cursus ac mi at, ullamcorper suscipit dolor.
            Maecenas tincidunt lorem varius, ultrices ex nec, cursus tellus.
            Nulla pulvinar volutpat luctus. Vivamus pulvinar urna libero. Duis
            auctor eget nisi in ullamcorper. Fusce suscipit dolor in imperdiet
            porttitor. Sed ut augue at magna mollis luctus. Aenean condimentum
            non sem ut ultricies.
          </p>
        </div>
      </SignedIn>
      <SignedOut>
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
        <div className="paragraph">
          <p className="intro-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio
            velit, faucibus nec vulputate ut, lacinia sit amet dolor. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Nullam felis sem, tincidunt mollis convallis a,
            venenatis ut ante. Quisque sodales, lacus eget lobortis aliquam,
            tortor dolor sodales erat, quis interdum magna erat sit amet lorem.
            Nam ut neque vel lectus dictum viverra a id risus. Fusce hendrerit,
            risus eu suscipit cursus, felis augue pretium enim, ac blandit velit
            libero sit amet diam. Donec porta, magna at consequat sollicitudin,
            dui felis accumsan nisl, eu aliquet ligula lorem id eros. Aenean
            elementum mauris non nunc commodo, vel hendrerit tortor bibendum.
            Phasellus augue lacus, cursus ac mi at, ullamcorper suscipit dolor.
            Maecenas tincidunt lorem varius, ultrices ex nec, cursus tellus.
            Nulla pulvinar volutpat luctus. Vivamus pulvinar urna libero. Duis
            auctor eget nisi in ullamcorper. Fusce suscipit dolor in imperdiet
            porttitor. Sed ut augue at magna mollis luctus. Aenean condimentum
            non sem ut ultricies.
          </p>
        </div>
      </SignedOut>
    </div>
  );
}

export default Home;
