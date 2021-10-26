import React from "react";

import Tour from "../tour/tour.component";

import "./tours.styles.css";

const Tours = ({ tours, deleteTour, handleRefresh }) => {
  if (tours.length === 0)
    return (
      <div>
        <h1 className="heading">No tours left</h1>
        <button className="btn-refresh" onClick={handleRefresh}>
          Refresh
        </button>
      </div>
    );

  return (
    <div>
      <h1 className="heading">Our tours</h1>
      <p className="blue-line"></p>
      <div className="tours">
        {tours.map((tour) => (
          <Tour key={tour.id} deleteTour={deleteTour} {...tour} />
        ))}
      </div>
    </div>
  );
};

export default Tours;
