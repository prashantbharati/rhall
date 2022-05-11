import React, { useState, useEffect } from "react";
import { Typography, Grid } from "@material-ui/core";
import aboutpage from "../images/aboutpage.jpg";
import aboutfront1 from "../images/aboutfront1.jpg";
import aboutfront2 from "../images/aboutfront2.png";
import sai from "../images/sai.png";
import nishant from "../images/nishant.png";
import Acard from "./aboutuscard.js";
const About = () => {
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
        style={{
          height: "80vh",
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.23) 0%, #A1A1A1 100%),url('${aboutpage}')`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {" "}
        <div style={{ padding: "220px 0 250px  8%" }}>
          <Typography
            style={{
              color: "#FFFFFF",
              fontFamily: "Poppins",
              fontSize: "90px",
              fontWeight: "500",
            }}
            // variant="h1"
          >
            About Us
          </Typography>
        </div>
      </div>

      <div style={{ marginLeft: `${matches2 ? "" : "40px"}` }}>
        <Grid container>
          {/* <Grid item xs={0} md={1}></Grid> */}
          {matches2 ? <Grid item xs={1}></Grid> : ""}
          <Grid item xs={10} md={6}>
            <div
              style={{
                height: `${matches2 ? "150vh" : "130vh"}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginRight: "20px",
                marginTop: "40px",
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
                A story in sustainability
              </Typography>
              <br /> <br />
              <Typography
                style={{
                  fontSize: "18px",
                  fontWeight: "200",
                }}
              >
                Back in 2014, depleting groundwater levels and urban water
                shortage motivated Sai Renugunta to start an awareness-raising
                initiative. This eventually transformed into an enterprise that
                undertook more than 500 Rainwater Harvesting projects,
                consequently conserving approximately 50 million litres of water
                every year. During this process Sai was able to identify several
                concerns such as high price, product complexity, incompatibility
                with existing infrastructures, and lack of options for
                consumers. This led to the evolution of Rainmax – a unique brand
                of effective, affordable and easy-to-use rooftop rainwater
                harvesting filters. Rainmax operates under the umbrella brand of
                UrbanEcology which offers consultancy services in sustainable
                architecture, earth-based building, and urban farming.
              </Typography>
            </div>
          </Grid>
          {matches2 ? <Grid item xs={1}></Grid> : ""}

          {matches2 ? (
            <Grid
              style={{
                backgroundImage: `url('${aboutfront1}')`,

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
                backgroundImage: `url('${aboutfront1}')`,
                backgroundSize: "cover",
              }}
              item
              xs={12}
              md={6}
            ></Grid>
          )}
        </Grid>
      </div>

      <div style={{ marginRight: "40px" }}>
        <Grid container>
          {/* <Grid item xs={0} md={1}></Grid> */}

          {matches2 ? (
            <Grid
              style={{
                backgroundImage: `url('${aboutfront2}')`,

                height: `${matches2 ? "40vh" : "0"}`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "",
              }}
              item
              xs={12}
              md={6}
            ></Grid>
          ) : (
            <Grid
              style={{
                backgroundImage: `url('${aboutfront2}')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
              item
              xs={12}
              md={6}
            ></Grid>
          )}

          {/* <Grid item style={{ backgroundColor: "" }} xs={12} md={6}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                backgroundImage: `url('${aboutfront2}')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </Grid> */}

          <Grid item xs={12} md={6}>
            <div
              style={{
                height: "80vh",
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
                  lineHeight: "1em",
                }}
              >
                About Urban Ecology
              </Typography>
              <br />
              <br />
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

      <Grid container spacing={10}>
        {matches2 ? <Grid item xs={1}></Grid> : ""}
        <Grid
          item
          xs={10}
          md={6}
          style={{ marginLeft: `${matches2 ? "" : "30px"}` }}
        >
          <Acard
            img={sai}
            name="Sai Prasad Renugunta"
            post="FOUNDER"
            job="Sustainable Architect | Green Entrepreneur"
            content="
A firm believer in the vital need for eco-friendly technologies, Sai spends much of his time developing and incorporating these into his decade-long architecture and design practice. A chance visit to the township of Auroville some years ago, led him to develop a keen interest in mud-based construction, rainwater harvesting, and organic farming, and pursue these concepts with entrepreneurial vigour.
Sai affirms that long drives and working out are his keys to stress management. He is a vocal proponent of the superiority of Hyderabadi biryani and Irani chai."
          />
        </Grid>
        {matches2 ? <Grid item xs={1}></Grid> : ""}
        {matches2 ? <Grid item xs={1}></Grid> : ""}
        <Grid
          item
          xs={10}
          md={5}
          style={{ marginLeft: `${matches2 ? "" : "30px"}` }}
        >
          <Acard
            img={nishant}
            name="Nishant Philip"
            post="STRATEGY CONSULTANT"
            job="Marketeer | Startup Advisor"
          />
        </Grid>
        {matches2 ? <Grid item xs={1}></Grid> : ""}
      </Grid>
    </>
  );
};

export default About;
