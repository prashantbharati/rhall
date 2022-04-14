import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import Nav from "./Nav";
import frontfilter1 from "./images/frontfilter1.jpg";
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
          height: "150vh",

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

            <Grid item sm={12} md={6}>
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
                    fontWeight: 200,
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
                <Button
                  variant="contained"
                  align="right"
                  style={{ width: "170px" }}
                >
                  See More
                </Button>
              </div>
            </Grid>

            <Grid item md={1}></Grid>

            <Grid item sm={12} md={3}>
              <div>
                <Cacomponent />
                <br />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography style={{ color: "#B9F8D3" }}>
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
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <div
        style={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          style={{
            fontSize: "40px",
            fontWeight: "200",
            lineHeight: "2.5",
          }}
        >
          Why harvest rainwater?
        </Typography>
        <div style={{ maxWidth: "800px" }}>
          <Typography
            style={{
              fontSize: "18px",
              fontWeight: "200",
            }}
          >
            Many of urban India’s borewells have gone dry, and our country may
            soon be classified as a drought zone. An average Indian household
            now spends more than Rs. 12000 on water tankers every year.
            Rainwater Harvesting is the obvious solution to this problem. It
            helps ensure uninterrupted supply of clean water with low hardness,
            while also recharging groundwater and helping prevent urban
            flooding.
          </Typography>
        </div>
      </div>

      <div style={{ marginLeft: "40px" }}>
        <Grid container>
          {/* <Grid item sm={0} md={1}></Grid> */}
          <Grid item sm={12} md={6}>
            <div
              style={{
                height: "130vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginRight: "20px",
                // alignItems: "center",
              }}
            >
              <Typography
                style={{
                  fontSize: "40px",
                  fontWeight: "200",
                  lineHeight: "2.5",
                }}
              >
                Rainmax Filter
              </Typography>

              <Typography
                style={{
                  fontSize: "18px",
                  fontWeight: "200",
                }}
              >
                Rainmax’s filter is the most effective, affordable and
                easy-to-use solution for Rooftop Rainwater Harvesting.It carries
                out a two-stage filtration process through its fine 100 micron
                Stainless Steel (SS) 304 grade mesh and its unique first flush
                system, thus effectively removing dust, leaves, contaminants and
                other debris. Depending on your roof area and requirements,
                there are 4 variants of this filter.
              </Typography>
            </div>
          </Grid>

          <Grid
            style={{
              backgroundImage: `url('${frontfilter1}')`,
              backgroundSize: "cover",
            }}
            item
            sm={12}
            md={6}
          ></Grid>
        </Grid>
      </div>
    </>
  );
};

export default App;
