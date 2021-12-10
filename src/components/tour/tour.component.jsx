import React, { useState } from "react";

import {
  TourContainer,
  TourImage,
  TourContent,
  TourTitle,
  TourCity,
  TourPrice,
  TourInfo,
  ButtonBlue,
  Button,
} from "./tour.styles";

const Tour = ({ image, name, info, price, id, deleteTour }) => {
  const [moreText, setMoreText] = useState(false);

  return (
    <TourContainer>
      <TourImage style={{ backgroundImage: `url(${image})` }} />
      <TourContent>
        <TourTitle>
          <TourCity>{name}</TourCity>
          <TourPrice>${price}</TourPrice>
        </TourTitle>
        <TourInfo>
          {moreText ? info : info.slice(0, 200).concat("...")}
          <ButtonBlue onClick={() => setMoreText(!moreText)}>
            {moreText ? "Show less" : "Read more"}
          </ButtonBlue>
        </TourInfo>
        <Button onClick={() => deleteTour(id)}>Not interested</Button>
      </TourContent>
    </TourContainer>
  );
};

export default Tour;
