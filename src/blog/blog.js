import React from "react";
import blogpage from "../images/blogpage.jpg";
import Card from "./card";
import { Grid, Container } from "@material-ui/core";
const Blog = () => {
  return (
    <>
      <div
        style={{
          height: "80vh",
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.18) 0%, #A1A1A1 100%),url('${blogpage}')`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <Grid style={{ justify: "center" }} container spacing={3}>
        <Grid item md={6}>
          <Card />
        </Grid>

        <Grid item md={6}>
          <Card />
        </Grid>

        <Grid item md={6}>
          <Card />
        </Grid>

        <Grid item md={6}>
          <Card />
        </Grid>
      </Grid>
    </>
  );
};

export default Blog;
