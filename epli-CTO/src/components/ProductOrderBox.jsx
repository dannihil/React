import React from "react";
import "../css/ProductOrderBox.css";
import { Checkbox, FormControlLabel } from "@mui/material";

import { useNavigate } from "react-router-dom";

function ProductOrderBox({
  imageUrl,
  standardSpecs,
  title,
  description,
  price,
  ctoOptions,
}) {
  const [checked, setChecked] = React.useState(false);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div>
      <div className="main-box">
        <div className="image-box">
          <img src={imageUrl} alt="Product Image" />
        </div>
        <div className="info-box">
          <h1>{title}</h1>
          <hr />
          {standardSpecs.map((specs, index) => {
            return (
              <ul key={index}>
                <li>{specs}</li>
              </ul>
            );
          })}

          <h2>{price}</h2>
          <button>Bæta í körfu</button>
          <hr />
        </div>
      </div>
      <div className="cto-box">
        <h1>Sérpöntunarmöguleikar:</h1>

        <h3>CPU</h3>
        <ul>
          <li>
            <FormControlLabel
              control={<Checkbox />}
              label="M3 8/10-core | +20.000kr"
            />
          </li>
        </ul>
        <h3>Memory</h3>
        <ul>
          <li>
            <FormControlLabel control={<Checkbox />} label="24GB | +40.000kr" />
          </li>
        </ul>
        <h3>Storage</h3>
        <ul>
          <li>
            <FormControlLabel
              control={<Checkbox />}
              label="512GB | +40.000kr"
            />
          </li>
          <li>
            <FormControlLabel control={<Checkbox />} label="1TB | +80.000kr" />
          </li>
          <li>
            <FormControlLabel control={<Checkbox />} label="2TB | +160.000kr" />
          </li>
        </ul>
        <h3>Acessories</h3>
        <ul>
          <li>
            <FormControlLabel
              control={<Checkbox />}
              label="35W Dual USB-C Power Adapter | +3.000kr"
            />
          </li>

          <li>
            <FormControlLabel
              control={<Checkbox />}
              label="70W Power Adapter | +3.000kr"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductOrderBox;
