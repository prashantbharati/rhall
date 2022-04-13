import { Typography } from "@material-ui/core";
import React from "react";
import Carousel from "react-elastic-carousel";
import filter1000 from "./images/filter1000.png";
import filter2000 from "./images/filter2000.png";
import simplex from "./images/filtersimplex.png";

const cacomponent = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    // { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    // { width: 850, itemsToShow: 3 },
    { width: 1000, itemsToShow: 2, itemsToScroll: 2 },
    // { width: 1450, itemsToShow: 5 },
    // { width: 1750, itemsToShow: 6 },
  ];

  const cards = [
    {
      name: "RAINMAX 1000",
      imagelink: filter1000,
    },
    {
      name: "RAINMAX 2000",
      imagelink: filter2000,
    },
    {
      name: "RAINMAX SIMPLEX",
      imagelink: simplex,
    },
  ];

  return (
    <Carousel breakPoints={breakPoints}>
      {cards.map((card) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={card.imagelink} alt="imagefilter" />
          <Typography>{card.name}</Typography>
        </div>
      ))}
    </Carousel>
  );
};
