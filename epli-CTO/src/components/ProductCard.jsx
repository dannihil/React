import React from "react";
import "./ProductCard.css";

// Utility function to format numbers
function formatCost(cost) {
  return new Intl.NumberFormat("is-IS").format(cost); // Icelandic locale for "." as a thousands separator
}

function ProductCard({
  partNr,
  description,
  imgUrl,
  price,
  epliUrl,
  ctoOptions,
}) {
  return (
    <div className="product-card">
      <img src={imgUrl} alt={description} className="product-card-image" />
      <div className="product-card-details">
        <h2 className="product-card-title">{partNr}</h2>
        <p className="product-card-description">{description}</p>
        <p className="product-card-price">Verð: {formatCost(price)}kr</p>

        {ctoOptions && (
          <div className="product-card-cto">
            <h3>Customization Options:</h3>
            {Object.entries(ctoOptions).map(([category, options]) => (
              <div key={category} className="cto-category">
                <h4>{category}:</h4>
                <ul>
                  {Object.entries(options).map(([option, cost]) => (
                    <li key={option}>
                      {option}: {cost ? `${formatCost(cost)}kr` : "Included"}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <a
          href={epliUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button-link"
        >
          Skoða nánar
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
