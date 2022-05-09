import React, { useState, useEffect } from "react";
import { Typography, Button, Grid } from "@material-ui/core";

import frontfilter1 from "../images/frontfilter1.jpg";
import frontfilter2 from "../images/frontfilter2.jpg";
import frontfirst from "../images/frontfirst.jpg";
import Cacomponent from "./carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Map from "./map.js";

import { makeStyles } from "@material-ui/core/styles";

import {
  faDroplet,
  faHouseFloodWater,
  faIndianRupeeSign,
  faMoneyBill,
  faPercentage,
  faPlus,
  faEnvelope,
  faMapMarker,
  faPhone,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import amazon from "../images/amazon.png";

const useStyles = makeStyles((theme) => ({
  animatedItem: {
    animation: `$myEffect 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  animatedItemExiting: {
    animation: `$myEffectExit 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  animatedItemExitingRight: {
    animation: `$myEffectExitright 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  animatedItem3: {
    animation: `$myEffectExit3 1000ms ${theme.transitions.easing.easeInOut}`,
  },

  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  "@keyframes myEffectExit": {
    "0%": {
      opacity: 0,
      transform: "translateY(200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },

  "@keyframes myEffectExitright": {
    "0%": {
      opacity: 0,
      transform: "translateX(200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },

  "@keyframes myEffectExit3": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

const Home = () => {
  const [eopacity, seteopacity] = useState(0.36);

  console.log(eopacity);

  const classes = useStyles();
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 600px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 600px)")
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

  return (
    <>
      <div
        id="topdiv"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,${eopacity}) 0%, #0c0c0c 100%),url('${frontfirst}')`,
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "transparent",

          transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
        }}
      >
        <div style={{ height: "25vh" }}></div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Grid container>
            <Grid item xs={1} md={1}></Grid>

            <Grid item xs={11} md={6}>
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

                    fontSize: `${matches ? "100px" : "170px"}`,

                    fontWeight: 200,
                  }}
                >
                  Be
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: `${matches ? "100px" : "170px"}`,
                    lineHeight: "0.5",
                  }}
                >
                  water
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: `${matches ? "100px" : "170px"}`,
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
                <br />
              </div>
            </Grid>

            <Grid item xs={1} md={1}></Grid>

            <Grid item xs={10} md={3}>
              <div>
                <div style={{ height: "50%", boxShadow: "0px 0px 5px #fff" }}>
                  <Cacomponent />
                </div>

                <br />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 0px 5px #fff",
                  }}
                >
                  <Typography
                    style={{
                      color: "#339a97",
                      fontFamily: "Montserrat",
                      fontSize: "18px",
                      fontWeight: "200",
                      lineHeight: "1.3em",
                      padding: "15px",
                      paddingBottom: "0",
                    }}
                  >
                    Why Rainmax filters are best in class:
                  </Typography>

                  <ul
                    style={{
                      color: "white",
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
              </div>
            </Grid>
            <Grid item xs={1} md={1}></Grid>
          </Grid>
        </div>

        {
          (window.onscroll = () => {
            var header = document.getElementById("topdiv");
            var distanceToTop =
              window.pageYOffset + header.getBoundingClientRect().top;
            var elementHeight = header.offsetHeight;
            var scrollTop = document.documentElement.scrollTop;

            var opacity = 0.36;

            if (scrollTop > distanceToTop) {
              opacity = 0.5 + (scrollTop - distanceToTop) / elementHeight;
            }

            console.log(distanceToTop, elementHeight, scrollTop);
            if (opacity >= 0) {
              /* header.style.opacity = opacity; */

              seteopacity(opacity);
            }
          })
        }

        {/*div 2 begins*/}

        <br />
        <br />
        <br />
        <div
          style={{
            height: `${matches2 ? "130vh" : "70vh"}`,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={4}>
              {!matches2 ? <br /> : ""}
              {!matches2 ? <br /> : ""}
              {!matches2 ? <br /> : ""}
              {!matches2 ? <br /> : ""}
              {!matches2 ? <br /> : ""}
              {matches2 ? <br /> : ""}
              {matches2 ? <br /> : ""}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  transform: `${
                    document.documentElement.scrollTop >= 500
                      ? "translateX(0%)"
                      : "translateX(-200%)"
                  }`,
                }}
                className={
                  document.documentElement.scrollTop >= 500
                    ? classes.animatedItem
                    : ""
                }
              >
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    border: "4px solid",
                    borderColor: "white",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesomeIcon
                    style={{
                      width: "4em",
                      height: "4em",
                      position: "relative",
                      display: "block",
                      color: "white",
                    }}
                    icon={faDroplet}
                  />
                </div>

                <Typography
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    textTransform: "none",
                    color: "#ffffff",
                  }}
                >
                  Water Supply
                </Typography>
                <br />
                <Typography
                  style={{
                    color: "#7E7979",
                    fontWeight: "300",
                    fontSize: "12px",
                  }}
                >
                  Ensures continuous water supply for your family, recharges
                  dead borewells and improves quality of groundwater.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              {matches2 ? <br /> : ""}
              {matches2 ? <br /> : ""}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  transform: `${
                    document.documentElement.scrollTop >= 500
                      ? "translateY(0%)"
                      : "translateY(200%)"
                  }`,
                }}
                className={
                  document.documentElement.scrollTop >= 500
                    ? classes.animatedItemExiting
                    : ""
                }
              >
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    border: "4px solid",
                    borderColor: "white",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesomeIcon
                    style={{
                      width: "4em",
                      height: "4em",
                      position: "relative",
                      display: "block",
                      color: "white",
                    }}
                    icon={faIndianRupeeSign}
                  />
                </div>
                <Typography
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    textTransform: "none",
                    color: "#ffffff",
                  }}
                >
                  Cost Saving
                </Typography>
                <br />
                <Typography
                  style={{
                    color: "#7E7979",
                    fontWeight: "300",
                    fontSize: "12px",
                  }}
                >
                  Helps save money spent on water tankers. Your initial
                  investment is recovered in under a year.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              {!matches2 ? <br /> : ""}
              {!matches2 ? <br /> : ""}
              {!matches2 ? <br /> : ""}
              {!matches2 ? <br /> : ""}
              {!matches2 ? <br /> : ""}
              {matches2 ? <br /> : ""}
              {matches2 ? <br /> : ""}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  // animation: `${leftfirst} 1s ease-in`,
                  transform: `${
                    document.documentElement.scrollTop >= 500
                      ? "translateX(0%)"
                      : ""
                  }`,
                }}
                className={
                  document.documentElement.scrollTop >= 500
                    ? classes.animatedItemExitingRight
                    : ""
                }
              >
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    border: "4px solid",
                    borderColor: "white",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesomeIcon
                    style={{
                      width: "4em",
                      height: "4em",
                      position: "relative",
                      display: "block",
                      color: "white",
                    }}
                    icon={faHouseFloodWater}
                  />
                </div>
                <Typography
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    textTransform: "none",
                    color: "#ffffff",
                  }}
                >
                  Reduced Flooding
                </Typography>
                <br />
                <Typography
                  style={{
                    color: "#7E7979",
                    fontWeight: "300",
                    fontSize: "12px",
                  }}
                >
                  Prevents the runoff of rooftop rainwater, thereby helping
                  reduce the possibility of Urban Flooding.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>

        <div style={{ backgroundColor: "white" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="black"
              fill-opacity="3"
              d="M0,64L240,192L480,192L720,256L960,64L1200,128L1440,192L1440,0L1200,0L960,0L720,0L480,0L240,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>

      <div
        style={{
          height: "110vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {}

        <br />
        <br />
        {matches2 ? <br /> : ""}
        {matches2 ? <br /> : ""}
        {matches2 ? <br /> : ""}
        {matches2 ? <br /> : ""}
        {matches2 ? <br /> : ""}
        <Typography
          style={{
            fontSize: "40px",
            fontWeight: "200",
            lineHeight: "1em",
          }}
        >
          Why harvest rainwater?
        </Typography>
        <br />
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

        <br />
        <br />
        <br />
        <br />

        <Grid container>
          <Grid item md={4} xs={12}>
            {matches2 ? <br /> : ""}
            {matches2 ? <br /> : ""}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className={
                document.documentElement.scrollTop >= 1500
                  ? classes.animatedItem3
                  : ""
              }
            >
              <FontAwesomeIcon
                style={{
                  width: "4em",
                  height: "4em",
                  position: "relative",
                  display: "block",
                  color: "#5b360d",
                }}
                icon={faPercentage}
              />
              <Typography>SUCCESS RATE</Typography>
            </div>
          </Grid>

          <Grid item md={4} xs={12}>
            {matches2 ? <br /> : ""}
            {matches2 ? <br /> : ""}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className={
                document.documentElement.scrollTop >= 1500
                  ? classes.animatedItem3
                  : ""
              }
            >
              <FontAwesomeIcon
                style={{
                  width: "4em",
                  height: "4em",
                  position: "relative",
                  display: "block",
                  color: "#5b360d",
                }}
                icon={faPlus}
              />
              <Typography>HOUSEHOLDS SERVED</Typography>
            </div>
          </Grid>

          <Grid item md={4} xs={12}>
            {matches2 ? <br /> : ""}
            {matches2 ? <br /> : ""}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className={
                document.documentElement.scrollTop >= 1500
                  ? classes.animatedItemExiting
                  : ""
              }
            >
              <FontAwesomeIcon
                style={{
                  width: "4em",
                  height: "4em",
                  position: "relative",
                  display: "block",
                  color: "#5b360d",
                }}
                icon={faMoneyBill}
              />
              <Typography>LITRES SAVED</Typography>
            </div>
          </Grid>
        </Grid>
      </div>

      <div style={{ marginLeft: "40px" }}>
        <Grid container>
          {/* <Grid item xs={0} md={1}></Grid> */}
          <Grid item xs={12} md={6}>
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
              <br /> <br />
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
                    width: "200px",
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
                      document.documentElement.scrollTop >= 1900
                        ? "translateX(0%)"
                        : "translateX(-200%)"
                    }`,
                  }}
                  className={
                    document.documentElement.scrollTop >= 1900
                      ? classes.animatedItem
                      : ""
                  }
                >
                  More Info
                </Button>
              </div>
            </div>
          </Grid>

          <Grid
            style={{
              backgroundImage: `url('${frontfilter1}')`,

              backgroundSize: "cover",
            }}
            item
            xs={12}
            md={6}
          ></Grid>
        </Grid>
      </div>

      <div style={{ marginRight: "40px" }}>
        <Grid container>
          {/* <Grid item xs={0} md={1}></Grid> */}

          <Grid
            style={{
              backgroundImage: `url('${frontfilter2}')`,
              backgroundSize: "cover",
            }}
            item
            xs={12}
            md={6}
          ></Grid>

          <Grid item xs={12} md={6}>
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
                Injection well
              </Typography>

              <Typography
                style={{
                  fontSize: "18px",
                  fontWeight: "200",
                }}
              >
                If you are trying to solve water problems for a residential
                township, gated community or large apartment building, the
                Rainmax Injection Well System is the most beneficial and
                cost-effective solution for you. It ensures constant supply of
                groundwater without having to depend on water tankers.
              </Typography>
              <br />
              <br />
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
                    width: "200px",
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
                      document.documentElement.scrollTop >= 1900
                        ? "translateX(0%)"
                        : "translateX(-200%)"
                    }`,
                  }}
                  className={
                    document.documentElement.scrollTop >= 1900
                      ? classes.animatedItem
                      : ""
                  }
                >
                  More Info
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div
        style={{
          height: `${matches2 ? "280vh" : "150vh"}`,
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            marginTop: "100px",
            alignItems: "center",
          }}
        >
          <Typography
            style={{
              color: "#262626",

              fontSize: "18px",
              fontWeight: "200",
            }}
          >
            Testimonitals
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",

              textAlign: "center",
            }}
          >
            <Typography
              style={{
                color: "#494949",
                fontSize: "40px",
                fontWeight: "200",
                lineHeight: "1em",
                bottom: "1px",
                padding: "20px",
                borderWidth: "0 0 1px",
                borderBlockEnd: " ",
                borderStyle: "solid",
                marginTop: "50px",
              }}
            >
              What customers say?
            </Typography>
          </div>
          <br /> <br /> <br /> <br /> <br />
          <Grid container spacing={3}>
            <Grid item xs={1} md={2}></Grid>
            <Grid item xs={10} md={3}>
              <FontAwesomeIcon
                style={{
                  height: "3em",
                  width: "3em",
                  position: "relative",
                  display: "inline-block",
                  color: "#bfbfbf",
                  paddingLeft: "20px",
                }}
                icon={faQuoteLeft}
              />

              <Typography
                style={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "300",
                  lineHeight: "2em",
                  marginLeft: "20px",
                }}
              >
                We are a stand-alone apartment building of 25 flats, and depend
                on water tankers year around. After implementing rooftop
                rainwater harvesting, we saved around 75 tankers of water in the
                monsoon, resulting in monetary savings of Rs. 60,000.
              </Typography>
              <br />
              <Typography
                style={{
                  color: "#000000",
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: "1.5",
                  marginLeft: "20px",
                }}
              >
                Shekhar
              </Typography>

              <Typography
                style={{
                  color: "#bfbfbf",
                  fontSize: "15px",
                  fontWeight: "300",
                  textTransform: "uppercase",
                  lineHeight: "1.6em",
                  letterSpacing: "3px",
                  marginLeft: "20px",
                }}
              >
                SAI LAKSHMI ARCADE KPHB, HYDERABAD
              </Typography>
            </Grid>
            {matches2 ? <Grid item xs={1} sm={0}></Grid> : ""}
            {matches2 ? <Grid item xs={1} sm={0}></Grid> : ""}
            <Grid item xs={10} md={2}>
              {matches2 ? <br /> : ""}
              <FontAwesomeIcon
                style={{
                  height: "3em",
                  width: "3em",
                  position: "relative",
                  display: "inline-block",
                  color: "#bfbfbf",
                  paddingLeft: "20px",
                }}
                icon={faQuoteLeft}
              />

              <Typography
                style={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "300",
                  lineHeight: "2em",
                  marginLeft: "20px",
                }}
              >
                Rooftop rainwater harvesting has been a godsend. Not only have
                we swiftly recovered our initial investment in the filters and
                plumbing, we have saved a lot of the money spent on tankers.
                Water shortages are a thing of the past!
              </Typography>
              <br />
              <Typography
                style={{
                  color: "#000000",
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: "1.5",
                  marginLeft: "20px",
                }}
              >
                Rajesh
              </Typography>

              <Typography
                style={{
                  color: "#bfbfbf",
                  fontSize: "15px",
                  fontWeight: "300",
                  textTransform: "uppercase",
                  lineHeight: "1.6em",
                  letterSpacing: "3px",
                  marginLeft: "20px",
                }}
              >
                GAUTAMI ENCLAVE KONDAPUR, HYDERABAD
              </Typography>
            </Grid>
            {matches2 ? <Grid item xs={1} sm={0}></Grid> : ""}
            {matches2 ? <Grid item xs={1} sm={0}></Grid> : ""}
            <Grid item xs={10} md={3}>
              {matches2 ? <br /> : ""}
              <FontAwesomeIcon
                style={{
                  height: "3em",
                  width: "3em",
                  position: "relative",
                  display: "inline-block",
                  color: "#bfbfbf",
                  paddingLeft: "20px",
                }}
                icon={faQuoteLeft}
              />

              <Typography
                style={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "300",
                  lineHeight: "2em",
                  marginLeft: "20px",
                }}
              >
                We worked with Sai to incorporate Injection Wells at our 120
                unit project - Eeco Valley, Chandanagar - because we were
                dependent on depleting groundwater & water tankers for supply.
                Now, Rainmax's Injection Wells have recharged our borewells
                substantially, with rooftop rainwater. It was so effective that
                many other apartments in our colony also followed suit.
              </Typography>
              <br />
              <Typography
                style={{
                  color: "#000000",
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: "1.5",
                  marginLeft: "20px",
                }}
              >
                Niranjan
              </Typography>

              <Typography
                style={{
                  color: "#bfbfbf",
                  fontSize: "15px",
                  fontWeight: "300",
                  textTransform: "uppercase",
                  lineHeight: "1.6em",
                  letterSpacing: "3px",
                  marginLeft: "20px",
                }}
              >
                SRIJA BUILDERS & DEVELOPERS MADHAVPURI HILLS, HYDERABAD
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>

      {/* Map div begins */}

      <div
        style={{
          height: `${matches2 ? "230vh" : "110vh"}`,
          backgroundColor: "white",
        }}
      >
        <Grid container>
          {!matches2 ? <Grid item md={1}></Grid> : ""}

          {matches2 ? <Grid item xs={1} sm={0}></Grid> : ""}
          <Grid item xs={10} md={5}>
            <br /> <br /> <br />
            <Typography
              style={{
                color: "#494949",
                fontSize: "40px",
                fontWeight: "200",
                lineHeight: "1em",
                bottom: "1px",
                padding: "20px",
                borderWidth: "0 0 1px",
                borderBlockEnd: "",
                borderStyle: "solid",
              }}
            >
              Buy online.
            </Typography>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <img
              src={amazon}
              style={{
                height: "50px",
                transform: `${
                  document.documentElement.scrollTop >= 4100
                    ? "translateY(0%)"
                    : "translateY(200%)"
                }`,
              }}
              className={
                document.documentElement.scrollTop >= 4100
                  ? classes.animatedItem3
                  : ""
              }
              alt="amazonimage"
            />
            <br />
            <br />
            <Typography
              style={{
                color: "#494949",
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
                color: "#494949",
                fontSize: "18px",
                fontWeight: "200",
                lineHeight: "1.5em",
                paddingLeft: "20px",
              }}
            >
              Headquartered in Hyderabad.
            </Typography>
            <Typography
              style={{
                color: "#494949",
                fontSize: "18px",
                fontWeight: "200",
                lineHeight: "1.5em",
                paddingLeft: "20px",
              }}
            >
              Available pan-India.
            </Typography>
            <br />
            <br />
            <FontAwesomeIcon
              style={{
                height: "1em",
                position: "relative",
                display: "inline-block",
                color: "#494949",
                paddingLeft: "20px",
              }}
              icon={faMapMarker}
            />
            <Typography
              style={{
                color: "#494949",
                paddingLeft: "50px",
                position: "relative",
                bottom: "17px",
                fontWeight: "300",
                fontSize: "0.8em",
              }}
            >
              Hyderabad, Telangana, India
            </Typography>
            <FontAwesomeIcon
              style={{
                height: "1em",
                position: "relative",
                display: "inline-block",
                color: "#494949",
                paddingLeft: "20px",
              }}
              icon={faEnvelope}
            />
            <Typography
              style={{
                color: "#494949",
                paddingLeft: "50px",
                position: "relative",
                bottom: "17px",
                fontWeight: "300",
                fontSize: "0.8em",
              }}
            >
              info@rainmax.co.in
            </Typography>
            <FontAwesomeIcon
              style={{
                height: "1em",
                position: "relative",
                display: "inline-block",
                color: "#494949",
                paddingLeft: "20px",
              }}
              icon={faPhone}
            />
            <Typography
              style={{
                color: "#494949",
                paddingLeft: "50px",
                position: "relative",
                bottom: "17px",
                fontWeight: "300",
                fontSize: "0.8em",
              }}
            >
              091-89191-59431
            </Typography>
            <Typography
              style={{
                color: "#494949",
                fontSize: "18px",
                fontWeight: "200",
                lineHeight: "1.5em",
                paddingLeft: "20px",
              }}
            >
              Our Social Pages
            </Typography>
            <br />
            <div
              style={{
                height: "40px",
                width: "40px",
                display: "inline-block",
              }}
            >
              <div
                style={{
                  height: "95%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10%",
                  backgroundColor: "white",
                  paddingLeft: "20px",
                }}
              >
                <FontAwesomeIcon
                  style={{
                    height: "1.5em",
                    position: "relative",
                    display: "inline-block",
                    color: "black",
                  }}
                  icon={faFacebookF}
                />
              </div>
            </div>
            &nbsp;
            <div
              style={{
                height: "40px",
                width: "40px",
                display: "inline-block",
              }}
            >
              <div
                style={{
                  height: "95%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10%",
                  backgroundColor: "white",
                }}
              >
                <FontAwesomeIcon
                  style={{
                    height: "1.5em",
                    position: "relative",
                    display: "inline-block",
                    color: "black",
                    paddingLeft: "20px",
                  }}
                  icon={faInstagram}
                />
              </div>
            </div>
            &nbsp;
            <div
              style={{
                height: "40px",
                width: "40px",
                display: "inline-block",
              }}
            >
              <div
                style={{
                  height: "95%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10%",
                  backgroundColor: "white",
                }}
              >
                <FontAwesomeIcon
                  style={{
                    height: "1.5em",
                    position: "relative",
                    display: "inline-block",
                    color: "black",
                    paddingLeft: "20px",
                  }}
                  icon={faLinkedin}
                />
              </div>
            </div>
          </Grid>

          {matches2 ? <Grid item xs={1} sm={0}></Grid> : ""}
          {matches2 ? <Grid item xs={1} sm={0}></Grid> : ""}
          <Grid item xs={10} md={5}>
            <br />
            <br />
            <br />
            <Map lag={17.385044} long={78.486671} />
          </Grid>
          {matches2 ? <Grid item xs={1} sm={0}></Grid> : ""}
        </Grid>
      </div>
    </>
  );
};

export default Home;
