import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Nav from "./Nav";
import aa from "./images/admin-ajax.jpg";
import frontfirst from "./images/frontfirst.jpg";
import Cacomponent from "./carousel";
const App = () => {
  return (
    <>
      <div
        style={{
          // height: "130vh",
          backgroundImage: `url('${frontfirst}')`,
          width: "100%",
          height: "130vh",

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
            <Grid item md={1}></Grid>

            <Grid item md={6}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  // textAlign: "center",
                  // alignItems: "center",
                  height: "100%",
                }}
              >
                <Typography
                  style={{
                    color: "white",

                    fontSize: "170px",
                    fontWeight: "400",
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

            <Grid item md={1}></Grid>

            <Grid item sm={12} md={3}>
              <Cacomponent />

              <div>
                <Typography style={{ color: "blue" }}>
                  Why Rainmax filters are best in class:
                </Typography>

                <ul style={{ color: "white" }}>
                  <li>
                    <Typography>Two-stage filtration</Typography>
                  </li>
                  <li>
                    <Typography>Self-cleaning</Typography>
                  </li>
                  <li>
                    <Typography>100 micron SS 304 mesh</Typography>
                  </li>
                  <li>
                    <Typography>First flush system</Typography>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default App;
