import React, { useState, useEffect } from "react";
import "../css/imac.css";
import ProductCard from "../components/ProductCard";

function Imac() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json") // Fetch data from public folder
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) =>
        console.error(
          "There has been a problem with your fetch operation:",
          error
        )
      );
  }, []);

  return (
    <>
      <div className="content">
        <div>
          <h1>iMac</h1>
          <div className="products-container">
            {data && data.iMac ? (
              data.iMac.map((item, index) => (
                <ProductCard
                  key={index}
                  partNr={item.part_nr}
                  description={item.description}
                  color={item.color}
                  imgUrl={item.img_url}
                  price={item.price || "N/A"} // Optionally add a price field
                  epliUrl={item.epli_url}
                  ctoOptions={item.cto_options}
                />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Imac;
