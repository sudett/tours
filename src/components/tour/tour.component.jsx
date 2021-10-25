import React from "react";

import "./tour.styles.css";

const Tour = ({ image, name, info, price }) => (
  <div className="tour">
    <div className="tour-image" style={{ backgroundImage: `url(${image})` }} />
    <div className="content">
      <div className="title">
        <h3 className="tour-city">{name}</h3>
        <span className="tour-price">${price}</span>
      </div>
      <p className="tour-info">{info}</p>
      <button className="btn">Not interested</button>
    </div>
  </div>
);

export default Tour;
