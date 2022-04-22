import React from "react";

import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const Cardcomponent = (props) => {
  return (
    <Card style={{ height: "600px", transition: "transform 1s" }}>
      <CardMedia
        style={{ height: "400px" }}
        component="img"
        image={props.img}
        alt="green iguana"
        onMouseOver={(e) =>
          (e.currentTarget.style = {
            transform: "scale(1.5)",
            overflow: "hidden",
          })
        }
        onMouseOut={(e) =>
          (e.currentTarget.style = {
            transform: "scale(1)",
            overflow: "hidden",
          })
        }
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
