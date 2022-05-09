import React, { useState, useEffect } from "react";
import blogpage from "../images/blogpage.jpg";
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";
import card4 from "../images/card4.jpg";
import Card from "./card";
import { Grid, Typography } from "@material-ui/core";
const Blog = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 450px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 450px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <>
      <div
        style={{
          height: "80vh",
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.18) 0%, #A1A1A1 100%),url('${blogpage}')`,
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
              fontSize: `${matches ? "70px" : "90px"}`,
              fontWeight: "500",
            }}
            // variant="h1"
          >
            The Rainmax Blog
          </Typography>
        </div>
      </div>

      <br />
      <br />
      <br />
      <Grid style={{ justify: "center" }} container spacing={3}>
        <Grid item md={6}>
          <Card
            img={card1}
            heading="Rooftop Rainwater Harvesting Explained"
            text="We have curated this special video for you, with the intent to give you a brief introduction and explanation to rooftop rainwater harvesting, using simple graphic art"
          />
        </Grid>

        <Grid item md={6}>
          <Card
            img={card2}
            heading="Solution for water scarcity"
            text="Since our previous blogpost explained the nature and scale of India’s water crisis, we decided that this one should focus on possible solutions. Effective water"
          />
        </Grid>

        <Grid item md={6}>
          <Card
            img={card3}
            heading="India's alarmimg water crisis"
            text="Water is life. It is the most unique natural resource Planet Earth has to offer - no life form is sustainable here without water"
          />
        </Grid>

        <Grid item md={6}>
          <Card
            img={card4}
            heading="A Quick introduction"
            text="Give us just 30 seconds of your time to introduce Rainmax and the valuable concept of Rainwater Harvesting. Handy Tip: You can"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Blog;
