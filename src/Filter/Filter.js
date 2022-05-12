import React, { useState, useEffect } from "react";
import filterpage from "../images/filterpage.jpg";
import frontfilter1 from "../images/frontfilter1.jpg";
import filterpic1 from "../images/filterpic1.jpg";
import filterpic2 from "../images/filterpic2.jpg";
import { Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  animatedItem: {
    animation: `$myEffect 1000ms ${theme.transitions.easing.easeInOut}`,
  },

  "@keyframes myEffect": {
    "0%": {
      opacity: 1,
      transform: "translateX(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
}));

const Filter = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 450px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 450px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const [matches2, setMatches2] = useState(
    window.matchMedia("(max-width: 960px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 960px)")
      .addEventListener("change", (e) => setMatches2(e.matches));
  }, []);

  const classes = useStyles();

  const doit = (e) => {
    e.target.style.backgroundColor = "black";
  };

  const doit2 = (e) => {
    e.target.style.backgroundColor = "white";
  };

  return (
    <>
      <div
        style={{
          height: "80vh",
          width: "100%",
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.33) 0%, #A1A1A1 100%),url('${filterpage}')`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
        }}
      >
        <div style={{ padding: "250px 0 250px  8%" }}>
          <Typography
            style={{
              color: "#FFFFFF",
              fontFamily: "Poppins",
              fontSize: `${matches ? "70px" : "90px"}`,
              fontWeight: "500",
            }}
            // variant="h1"
          >
            Rainmax Filters
          </Typography>
        </div>
      </div>

      <div style={{ marginRight: `${matches2 ? "" : "40px"}` }}>
        <Grid container>
          {matches2 ? (
            <Grid
              style={{
                backgroundImage: `url('${frontfilter1}')`,
                height: `${matches2 ? "70vh" : "0"}`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
              item
              xs={12}
              md={6}
            ></Grid>
          ) : (
            <Grid
              style={{
                backgroundImage: `url('${frontfilter1}')`,
                backgroundSize: "cover",
              }}
              item
              xs={12}
              md={6}
            ></Grid>
          )}

          {matches2 ? <Grid item xs={1}></Grid> : ""}
          <Grid item xs={10} md={6}>
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
              {
                (window.onscroll = () => {
                  var scrollTop = document.documentElement.scrollTop;

                  var opacity = 0.36;

                  console.log(scrollTop);
                  if (opacity >= 0) {
                    /* header.style.opacity = opacity; */
                  }
                })
              }
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",

                  alignItems: `${!matches2 ? "" : "center"}`,
                }}
              >
                <Button
                  variant="outlined"
                  align="right"
                  style={{
                    width: "320px",
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

                    transform: `${
                      document.documentElement.scrollTop >= 600
                        ? "translateX(0%)"
                        : ""
                    }`,
                  }}
                  className={
                    document.documentElement.scrollTop >= 600
                      ? classes.animatedItem
                      : ""
                  }
                  onMouseOver={doit}
                  onMouseOut={doit2}
                >
                  Download Broucher
                </Button>
              </div>
            </div>
          </Grid>
          {matches2 ? <Grid item xs={1}></Grid> : ""}
        </Grid>
      </div>

      <div style={{ height: `${matches2 ? "60vh" : "40vh"}` }}>
        <Grid container>
          {matches2 ? <Grid item xs={1}></Grid> : ""}
          <Grid item xs={10} md={6}>
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
          {matches2 ? <Grid item xs={1}></Grid> : ""}
        </Grid>
      </div>

      <div style={{ marginRight: `${matches2 ? "" : "40px"}` }}>
        <Grid container>
          {/* <Grid item xs={0} md={1}></Grid> */}

          {matches2 ? (
            <Grid
              style={{
                backgroundImage: `url('${filterpic1}')`,
                height: `${matches2 ? "50vh" : "0"}`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
              item
              xs={12}
              md={6}
            ></Grid>
          ) : (
            <Grid
              style={{
                backgroundImage: `url('${filterpic1}')`,
                backgroundSize: "cover",
              }}
              item
              xs={12}
              md={6}
            ></Grid>
          )}

          <Grid item xs={12} md={6}>
            <div
              style={{
                height: `${matches2 ? "100vh" : "130vh"}`,
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
                How it works
              </Typography>

              <Typography
                style={{
                  fontSize: "18px",
                  fontWeight: "200",
                }}
              >
                Rainwater from the rooftop passes through downtake pipes and
                enters the filter chamber. It filters through a fine 100-micron
                stainless steel (SS) 304 grade mesh. Around 5-10% of this water,
                along with leaves and debris, empties out through the waste
                water outlet. The remaining water enters into the first flush
                system, where initial turbid rainwater is trapped below the
                float ball and drained through the ball valve. Clean water then
                enters into the storage tank through the clean water outlet.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>

      <div style={{ marginLeft: `${matches2 ? "" : "40px"}` }}>
        <Grid container>
          {/* <Grid item xs={0} md={1}></Grid> */}
          {matches2 ? <Grid item xs={1}></Grid> : ""}
          <Grid item xs={11} md={6}>
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
              <div>
                <Typography
                  style={{
                    fontSize: "40px",
                    fontWeight: "200",
                    lineHeight: "2.5",
                  }}
                >
                  Features
                </Typography>

                <ul
                  style={{
                    color: "black",
                    fontSize: "18px",
                    fontWeight: "200",
                    lineHeight: "1.3em",
                  }}
                >
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

              <div>
                <Typography
                  style={{
                    fontSize: "40px",
                    fontWeight: "200",
                    lineHeight: "2.5",
                  }}
                >
                  Benefits
                </Typography>

                <ul
                  style={{
                    color: "black",
                    fontSize: "18px",
                    fontWeight: "200",
                    lineHeight: "1.3em",
                  }}
                >
                  <li>
                    <Typography>Most effective</Typography>
                  </li>
                  <li>
                    <Typography>Affordability</Typography>
                  </li>
                  <li>
                    <Typography>Easy-to-install</Typography>
                  </li>
                  <li>
                    <Typography>Easy-to-maintain</Typography>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>

          {matches2 ? (
            <Grid
              style={{
                backgroundImage: `url('${filterpic2}')`,
                height: `${matches2 ? "70vh" : "0"}`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
              item
              xs={12}
              md={6}
            ></Grid>
          ) : (
            <Grid
              style={{
                backgroundImage: `url('${filterpic2}')`,
                backgroundSize: "cover",
              }}
              item
              xs={12}
              md={6}
            ></Grid>
          )}
        </Grid>
      </div>

      <div style={{ height: "80vh" }}>
        <Grid container>
          <Grid item md={6}></Grid>
          {matches2 ? <Grid item xs={1}></Grid> : ""}
          <Grid item xs={10} md={6}>
            <div
              style={{
                height: "750%",
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
                Easy installation and maintenance
              </Typography>
            </div>
          </Grid>
          {matches2 ? <Grid item xs={1}></Grid> : ""}
        </Grid>
      </div>
    </>
  );
};

export default Filter;
