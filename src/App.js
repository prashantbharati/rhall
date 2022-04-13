import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Nav from "./Nav";
import aa from "./images/admin-ajax.jpg";
import filter1 from "./images/filter1.png";
const App = () => {
  return (
    <>
      <div
        style={{
          height: "130vh",
          backgroundImage: `url('${aa}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          imageRendering: "-webkit-optimize-contrast",
        }}
      >
        <Nav />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Grid container>
            <Grid item md={7}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  // textAlign: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Typography
                  style={{
                    color: "white",

                    fontSize: "170px",
                    fontWeight: "lighter",
                  }}
                >
                  Be
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "170px",
                    lineHeight: "0.5",
                  }}
                >
                  water
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "170px",
                  }}
                >
                  wise.
                </Typography>
              </div>
            </Grid>

            <Grid item md={5}>
              <img src={filter1} alt="BigCo Inc. logo" />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default App;
