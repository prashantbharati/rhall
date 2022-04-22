import React from "react";
import { Typography, Grid } from "@material-ui/core";
import aboutpage from "../images/aboutpage.jpg";
import aboutfront1 from "../images/aboutfront1.jpg";
import aboutfront2 from "../images/aboutfront2.png";
const about = () => {
  return (
    <>
      <div
        style={{
          height: "80vh",
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.23) 0%, #A1A1A1 100%),url('${aboutpage}')`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

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
              backgroundImage: `url('${aboutfront1}')`,
              backgroundSize: "cover",
            }}
            item
            sm={12}
            md={6}
          ></Grid>
        </Grid>
      </div>

      <div style={{ marginRight: "40px" }}>
        <Grid container>
          {/* <Grid item sm={0} md={1}></Grid> */}

          <Grid
            style={{
              backgroundImage: `url('${aboutfront2}')`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
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
                marginLeft: "20px",
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
                About Urban Ecology
              </Typography>

              <Typography
                style={{
                  fontSize: "18px",
                  fontWeight: "200",
                }}
              >
                Urban Ecology is a venture that seeks to build entrepreneurial
                success in the areas of green architecture (using mudbrick
                technology), urban farming, and rainwater harvesting. Rainmax is
                an Urban Ecology brand. Visit our website by clicking the logo
                on the left.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default about;
