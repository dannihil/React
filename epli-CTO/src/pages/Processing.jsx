import React, { useState, useEffect } from "react";
import ProductOrderBox from "../components/ProductOrderBox";
import "../css/Processing.css";

function Processing() {
  // State to track if the banner should be visible
  const [showBanner, setShowBanner] = useState(false);

  // Hook to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll position: ", window.scrollY);
      // When scroll position is greater than 200px, show the banner
      if (window.scrollY > 500) {
        setShowBanner(true);
      } else {
        setShowBanner(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array, so this effect runs only once when the component mounts

  return (
    <div style={{ marginTop: 30, color: "black" }}>
      <ProductOrderBox
        imageUrl="/assets/mba_m3_mid.png"
        title="MacBook Air"
        price="229.990kr"
        description=""
        standardSpecs={[
          "Apple M3 örgjörvi",
          "8-Core CPU",
          "8-Core GPU",
          "16GB Unified vinnsluminni",
          "256GB SSD",
          "16-Core Neural Engine",
          '13,6" Liquid Retina skjár',
          "1080p FaceTime Camera",
          "2x Thunderbolt/USB4 tengi",
          "Magic lyklaborð með Touch ID",
          "Force Touch trackpad",
          "30W USB-C hleðsla",
        ]}
      />

      {/* Pricing banner */}
      <div className={`pricing-banner ${showBanner ? "visible" : "hidden"}`}>
        <div className="pricing-banner-content">
          <span className="banner-text">Special Price: 229.990kr</span>
        </div>
      </div>
    </div>
  );
}

export default Processing;
