import React from "react";
import "../css/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="content">
      <div>
        <h1 className="title" style={{ fontSize: "60px" }}>
          Welcome to Epli Custom Order portal!
        </h1>
        <button onClick={() => navigate("/macbook-air")}>Get started!</button>
      </div>
    </div>
  );
}

export default Home;
