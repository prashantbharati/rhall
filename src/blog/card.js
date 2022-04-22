import React from "react";
import frontfilter from "../images/frontfilter1.jpg";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const Cardcomponent = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={frontfilter}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
};
export default Cardcomponent;
