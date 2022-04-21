import React from "react";
import filterpage from "../images/filterpage.jpg";
import frontfilter1 from "../images/frontfilter1.jpg";
import { Typography, Button, Grid } from "@material-ui/core";
const Filter = () => {
  return (
    <>
      <div
        style={{
          height: "80vh",
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.33) 0%, #A1A1A1 100%),url('${filterpage}')`,
          backgroundSize: "cover",
        }}
      ></div>

      <div style={{ marginRight: "40px" }}>
        <Grid container>
          <Grid
            style={{
              backgroundImage: `url('${frontfilter1}')`,
              backgroundSize: "cover",
            }}
            item
            sm={12}
            md={6}
          ></Grid>

          <Grid item sm={12} md={6}>
            <div
              style={{
                height: "130vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: "40px",
                // alignItems: "center",
              }}
            >
              <Typography
                style={{
                  fontSize: "40px",
                  fontWeight: "200",
                  lineHeight: "1em",
                }}
              >
                What is it?
              </Typography>
              <br /> <br /> <br />
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
              <br /> <br /> <br />
              <Button
                variant="outlined"
                align="right"
                style={{
                  width: "50%",
                  fontSize: "16px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  lineHeight: "1em",
                  letterSpacing: "1.5px",
                  textShadow: "0px 0px 0px rgb(0 0 0 / 30%)",
                  fill: "#000000",
                  color: "#000000",
                  backgroundColor: "rgba(64,84,178,0)",
                  borderStyle: "solid",
                  borderWidth: "2px 2px 2px 2px",
                  borderColor: "#1e1e1e",
                  borderRadius: "5px 5px 5px 5px",
                  boxShadow: "0px 0px 15px 0px rgb(0 0 0 / 11%)",
                  padding: "15px 35px 15px 35px",
                }}
              >
                Download Broucher
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>

      <div style={{ height: "40vh" }}>
        <Grid container>
          <Grid item md={6}>
            <div
              style={{
                height: "700%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                style={{
                  fontSize: "40px",
                  fontWeight: "200",
                  lineHeight: "1em",
                }}
              >
                Product video - an introduction
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Filter;
