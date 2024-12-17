import "../css/FlipCard.css";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { FaPlusCircle } from "react-icons/fa";

function FlipCard({ title, description, imageUrl }) {
  const [isActive, setIsActive] = useState(false);

  // Toggle active state on click
  const handleIconClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={`paragraph ${isActive ? "active" : ""}`}>
      <p className="intro-text" style={{ fontSize: "30px", fontWeight: 700 }}>
        {title}
      </p>
      <p className="intro-text" style={{ fontWeight: 300, fontSize: "20px" }}>
        {description}
      </p>
      <img src={imageUrl} alt="Product Image" />
      <FaPlusCircle
        className={`plus-icon ${isActive ? "active" : ""}`}
        style={{
          width: 40,
          height: 40,
          cursor: "pointer",
        }}
        onClick={handleIconClick}
      />
    </div>
  );
}

export default FlipCard;
