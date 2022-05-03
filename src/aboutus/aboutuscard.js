import React from "react";
import sai from "../images/sai.png";
import { Grid, Typography } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faGoogle,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const aboutuscard = (props) => {
  return (
    <div style={{ height: "140vh", width: "100%", backgroundColor: "#686868" }}>
      <Grid container style={{ bottomMargin: "0" }} spacing={4}>
        <Grid item md={1}></Grid>
        <Grid item md={3}>
          <img style={{ height: "50%" }} src={sai} alt="saiimage" />
        </Grid>

        <Grid item md={4}>
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
        </Grid>
      </Grid>

      <Grid container style={{ position: "relative", bottom: "70px" }}>
        <Grid item md={1}></Grid>
        <Grid item md={8}>
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
        </Grid>
      </Grid>
    </div>
  );
};

export default aboutuscard;

/* 

text-align: justify;
    color: #686868;
    font-family: "Montserrat", Sans-serif;
    font-size: 18px;
    font-weight: 200;
    line-height: 1.5em;
    letter-spacing: 1px;
*/
