import React, { useEffect, useState } from "react";
import "../css/GettingStarted.css";
import CategoryBox from "../components/CategoryBox";

const GettingStarted = () => {
  return (
    <>
      <h1 className="GS-content" style={{ marginBottom: 30 }}>
        Pick a category
      </h1>
      <CategoryBox />
    </>
  );
};

export default GettingStarted;
