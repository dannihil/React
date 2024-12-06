import React, { useState, useEffect } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
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
      <div>
        <h1>MacBook Air 13" M2</h1>
        <div className="products-container">
          {data && data.MacBook_Air_13_M2 ? (
            data.MacBook_Air_13_M2.map((item, index) => (
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
      <div>
        <h1>MacBook Air 13" M3</h1>
        <div className="products-container">
          {data && data.MacBook_Air_13_M3 ? (
            data.MacBook_Air_13_M3.map((item, index) => (
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
      <div>
        <h1>MacBook Air 15" M3</h1>
        <div className="products-container">
          {data && data.MacBook_Air_15_M3 ? (
            data.MacBook_Air_15_M3.map((item, index) => (
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
      <div>
        <h1>MacBook Pro 14"</h1>
        <div className="products-container">
          {data && data.Macbook_Pro_14 ? (
            data.Macbook_Pro_14.map((item, index) => (
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
      <div>
        <h1>MacBook Pro 16"</h1>
        <div className="products-container">
          {data && data.MacBook_Pro_16 ? (
            data.MacBook_Pro_16.map((item, index) => (
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
      <div>
        <h1>Mac mini</h1>
        <div className="products-container">
          {data && data.Mac_mini ? (
            data.Mac_mini.map((item, index) => (
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
      <div>
        <h1>Mac Studio</h1>
        <div className="products-container">
          {data && data.Mac_Studio ? (
            data.Mac_Studio.map((item, index) => (
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
      <div>
        <h1>Mac Pro</h1>
        <div className="products-container">
          {data && data.Mac_Pro ? (
            data.Mac_Pro.map((item, index) => (
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
    </>
  );
}

export default App;
