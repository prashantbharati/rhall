import React from "react";

import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const Cardcomponent = (props) => {
  const doit = (e) => {
    console.log(e.target.style);
    e.target.style = "transition: transform .2s;transform:scale(1.5)";
    console.log(e.target.style);
  };

  const doit2 = (e) => {
    e.target.style = "transition: transform .2s;transform:scale(1)";
  };

  return (
    <Card
      style={{
        height: "600px",
      }}
    >
      <CardMedia
        style={{
          height: "400px",
        }}
        component="img"
        image={props.img}
        alt="green iguana"
        onMouseOver={doit}
        onMouseOut={doit2}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.text}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default Cardcomponent;
