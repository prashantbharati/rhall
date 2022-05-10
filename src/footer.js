import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
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
        style={{
          marginTop: "30px",
          height: `${matches2 ? "80vh" : "40vh"}`,
          backgroundColor: "#1E1E1E",
        }}
      >
        <Grid container>
          <Grid item xs={1} md={1}></Grid>
          <Grid item xs={10} md={5}>
            <Typography
              style={{
                color: "#888",
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
                color: "#D6D6D6",
                fontSize: "18px",
                fontWeight: "200",
                lineHeight: "1.5em",
              }}
            >
              Headquartered in Hyderabad.
            </Typography>
            <Typography
              style={{
                color: "#D6D6D6",
                fontSize: "18px",
                fontWeight: "200",
                lineHeight: "1.5em",
              }}
            >
              Available pan-India.
            </Typography>
          </Grid>
          {matches2 ? <Grid item xs={1} md={1}></Grid> : ""}
          {matches2 ? <Grid item xs={1} md={1}></Grid> : ""}

          <Grid style={{ marginLeft: "20px" }} item xs={10} md={5}>
            <br />
            <br />
            <FontAwesomeIcon
              style={{
                height: "1em",
                position: "relative",
                display: "inline-block",
                color: "white",
              }}
              icon={faMapMarker}
            />
            <Typography
              style={{
                color: "#D6D6D6",
                paddingLeft: "30px",
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
                color: "white",
              }}
              icon={faEnvelope}
            />
            <Typography
              style={{
                color: "#D6D6D6",
                paddingLeft: "30px",
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
                color: "white",
              }}
              icon={faPhone}
            />
            <Typography
              style={{
                color: "#D6D6D6",
                paddingLeft: "30px",
                position: "relative",
                bottom: "17px",
                fontWeight: "300",
                fontSize: "0.8em",
              }}
            >
              091-89191-59431
            </Typography>
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
                  }}
                  icon={faLinkedin}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Footer;
