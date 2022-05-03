import React from "react";
import { Grid, Typography } from "@material-ui/core";
const footer = () => {
  return (
    <>
      <div
        style={{
          marginTop: "30px",
          height: "40vh",
          backgroundColor: "#1E1E1E",
        }}
      >
        <Grid container>
          <Grid item md={1}></Grid>
          <Grid item md={5}>
            <Typography
              style={{
                color: "#888",
                fontSize: "40px",
                fontWeight: "200",
                lineHeight: "1em",
                bottom: "1px",
                padding: "20px",
                borderWidth: "0 0 1px",
                borderStyle: "solid",
              }}
            >
              Get in touch.
            </Typography>
            <br />
            <br />

            <Typography
              style={{
                color: "#D6D6D6",
                fontSize: "18px",
                fontWeight: "200",
                lineHeight: "1.5em",
              }}
            >
              Headquartered in Hyderabad.
            </Typography>
            <Typography
              style={{
                color: "#D6D6D6",
                fontSize: "18px",
                fontWeight: "200",
                lineHeight: "1.5em",
              }}
            >
              Available pan-India.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default footer;
