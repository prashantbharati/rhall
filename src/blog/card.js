import React from "react";

import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const Cardcomponent = (props) => {
  return (
    <Card style={{ height: "70vh" }}>
      <CardMedia
        style={{ height: "70%" }}
        component="img"
        height="140"
        image={props.img}
        alt="green iguana"
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
