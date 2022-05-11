import React, { useState, useEffect } from "react";
import sai from "../images/sai.png";
import { Grid, Typography } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebookF, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Aboutuscard = (props) => {
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

  const [matches3, setMatches3] = useState(
    window.matchMedia("(max-width: 1300px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 1300px)")
      .addEventListener("change", (e) => setMatches3(e.matches));
  }, []);

  return (
    <div
      style={{
        height: `${matches2 ? "190vh" : "140vh"}`,
        backgroundColor: "#686868",
        display: `${matches2 ? "flex" : ""}`,
        flexDirection: `${matches2 ? "column" : ""}`,
        justifyContent: `${matches2 ? "center" : ""}`,
        alignItems: `${matches2 ? "center" : ""}`,
      }}
    >
      <Grid container style={{ bottomMargin: "0" }} spacing={4}>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={12} md={matches3 ? 4 : 3}>
          <div
            style={{
              width: "100%",
              display: `${matches2 ? "flex" : ""}`,
              flexDirection: `${matches2 ? "column" : ""}`,
              justifyContent: `${matches2 ? "center" : ""}`,
              alignItems: `${matches2 ? "center" : ""}`,
            }}
          >
            <img style={{ height: "125px" }} src={props.img} alt="saiimage" />
          </div>
        </Grid>
        {matches2 ? <Grid item xs={1}></Grid> : ""}
        <Grid item xs={10} md={6}>
          <div
            style={{
              width: "100%",
              display: `${matches2 ? "flex" : ""}`,
              flexDirection: `${matches2 ? "column" : ""}`,
              justifyContent: `${matches2 ? "center" : ""}`,
              alignItems: `${matches2 ? "center" : ""}`,
            }}
          >
            <Typography
              style={{
                marginBottom: "22px",
                color: "#000000",
                fontFamily: "Montserrat",
                fontWeight: "800",
                fontSize: "35px",
              }}
            >
              {props.name}
            </Typography>

            <Typography
              style={{
                color: "black",
                fontFamily: "Montserrat",
                //   fontSize: "15px",
                fontWeight: "800",
                textTransform: "uppercase",
                lineHeight: "0.1em",
              }}
            >
              {props.post}
            </Typography>
          </div>
        </Grid>
        {matches2 ? <Grid item xs={1}></Grid> : ""}
      </Grid>
      <br />
      <Grid container style={{ position: "relative", top: "20px" }}>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={10} md={8}>
          <div
            style={{
              width: "100%",
              display: `${matches2 ? "flex" : ""}`,
              flexDirection: `${matches2 ? "column" : ""}`,
              justifyContent: `${matches2 ? "center" : ""}`,
              alignItems: `${matches2 ? "center" : ""}`,
            }}
          >
            <Typography
              style={{
                textAlign: "justify",
                color: "black",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontWeight: "200",
                lineHeight: "1.5em",
                letterSpacing: "0.3px",
              }}
            >
              {props.job}
            </Typography>
            <Typography
              style={{
                textAlign: "justify",
                color: "black",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontWeight: "200",
                lineHeight: "1.5em",
                letterSpacing: "1px",
              }}
            >
              {props.content}
            </Typography>
          </div>
          <br />
          <div
            style={{
              width: "100%",
              display: `${matches2 ? "flex" : ""}`,
              flexDirection: `${matches2 ? "row" : ""}`,
              justifyContent: `${matches2 ? "center" : ""}`,
              alignItems: `${matches2 ? "center" : ""}`,
            }}
          >
            <div
              style={{
                height: "40px",
                width: "40px",
                display: "inline-block",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
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
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                }}
              >
                <FontAwesomeIcon
                  style={{
                    height: "1.5em",
                    position: "relative",
                    display: "inline-block",
                    color: "black",
                  }}
                  icon={faLinkedin}
                />
              </div>
            </div>
          </div>
        </Grid>
        {matches2 ? <Grid item xs={1}></Grid> : ""}
      </Grid>
    </div>
  );
};

export default Aboutuscard;

/* 

text-align: justify;
    color: #686868;
    font-family: "Montserrat", Sans-serif;
    font-size: 18px;
    font-weight: 200;
    line-height: 1.5em;
    letter-spacing: 1px;
*/
