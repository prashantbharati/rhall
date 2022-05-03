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

const aboutuscard = () => {
  return (
    <div style={{ height: "140vh", width: "50%", backgroundColor: "#686868" }}>
      <Grid container style={{ bottomMargin: "0" }}>
        <Grid item md={1}></Grid>
        <Grid item md={3}>
          <img style={{ height: "50%" }} src={sai} alt="saiimage" />
        </Grid>
        <Grid item md={2}>
          <Typography
            style={{
              marginBottom: "22px",
              color: "#000000",
              fontFamily: "Montserrat",
              fontWeight: "800",
              fontSize: "35px",
            }}
          >
            Sai Prasad Renugunta
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
            FOUNDER
          </Typography>
        </Grid>
      </Grid>

      <Grid container style={{ position: "relative", bottom: "50px" }}>
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
            Sustainable Architect | Green Entrepreneur A firm believer in the
            vital need for eco-friendly technologies, Sai spends much of his
            time developing and incorporating these into his decade-long
            architecture and design practice. A chance visit to the township of
            Auroville some years ago, led him to develop a keen interest in
            mud-based construction, rainwater harvesting, and organic farming,
            and pursue these concepts with entrepreneurial vigour. Sai affirms
            that long drives and working out are his keys to stress management.
            He is a vocal proponent of the superiority of Hyderabadi biryani and
            Irani chai.
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
