import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/CategoryBox.css";

const CategoryBox = () => {
  const navigate = useNavigate();
  // Manually define category data with image paths
  const categories = [
    {
      categoryName: "MacBook Air",
      img_url: "/assets/mba_m2_sg.png",
      navigation: "/macbook-air",
    },
    {
      categoryName: "MacBook Pro",
      img_url: "/assets/mbp_14_SB.png",
      navigation: "/macbook-pro",
    },
    {
      categoryName: "Mac mini",
      img_url: "/assets/mac_mini.png",
      navigation: "/mac-mini",
    },
    {
      categoryName: "iMac",
      img_url: "/assets/imac_blue.png",
      navigation: "/imac",
    },
    {
      categoryName: "Mac Studio",
      img_url: "/assets/mac_studio.png",
      navigation: "/mac-studio",
    },
    {
      categoryName: "Mac Pro",
      img_url: "/assets/mac_pro.png",
      navigation: "/mac-pro",
    },
    // Add other categories here as needed
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
      {categories.map((category) => (
        <div
          className="category-box"
          key={category.categoryName}
          onClick={() => navigate(category.navigation)}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "16px",
            textAlign: "center",
            width: "200px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          <img
            src={category.img_url}
            alt={category.description}
            style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
          />
          <h3 style={{ fontSize: "20px", margin: "12px 0" }}>
            {category.categoryName}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default CategoryBox;
