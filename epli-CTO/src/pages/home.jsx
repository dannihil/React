import React from "react";
import "../css/Home.css";
import { useNavigate } from "react-router-dom";
import { FaApple } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();
  const logo = "/assets/logo.png";

  return (
    <div className="content">
      <div>
        <FaApple
          className="apple-icon"
          style={{
            width: 250,
            height: "100%",
            paddingBottom: 100,
          }}
        />
      </div>
      <div>
        <h1
          className="title"
          style={{
            fontSize: "60px",
            paddingBottom: 30,
          }}
        >
          Epli Custom Order Portal
        </h1>
        <button onClick={() => navigate("/getting-started")}>
          Get started!
        </button>
      </div>
    </div>
  );
}

export default Home;
