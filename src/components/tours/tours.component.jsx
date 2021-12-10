import React from "react";

import Tour from "../tour/tour.component";

import {
  ToursContainer,
  BlueLine,
  ButtonRefresh,
  HeadingPrimary,
} from "./tours.styles";

const Tours = ({ tours, deleteTour, handleRefresh }) => {
  if (tours.length === 0)
    return (
      <>
        <HeadingPrimary>No tours left</HeadingPrimary>
        <ButtonRefresh onClick={handleRefresh}>Refresh</ButtonRefresh>
      </>
    );

  return (
    <>
      <HeadingPrimary>Our tours</HeadingPrimary>
      <BlueLine></BlueLine>
      <ToursContainer>
        {tours.map((tour) => (
          <Tour key={tour.id} deleteTour={deleteTour} {...tour} />
        ))}
      </ToursContainer>
    </>
  );
};

export default Tours;
