import React from "react";

import Tour from "../tour/tour.component";

import "./tours.styles.css";

const Tours = ({ tours }) => (
  <div>
    <h1 className="heading">Our Tours</h1>
    <p className="blue-line"></p>
    {tours.map(({ id, ...otherProps }) => (
      <Tour key={id} {...otherProps} />
    ))}
  </div>
);

export default Tours;