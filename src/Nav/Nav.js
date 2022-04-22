import React from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useStyles from "./styles.js";
import rainmaxlogo1 from "../images/rainmaxlogo1.png";
const Nav = () => {
  const classes = useStyles();
  return (
    <>
      <header style={{ height: "12vh" }} className={classes.header}>
        <a href="#" id="logotop" className={classes.headerlogo}>
          <img
            style={{
              opacity: "1",
              padding: "5px",
              height: "60px",
              width: "1024",
            }}
            src={rainmaxlogo1}
            alt="logo"
          />
        </a>

        <ul className={classes.headerul}>
          <li className={classes.headerulli}>
            <a id="home" className={classes.headerullia} href="/">
              HOME
            </a>
          </li>
          <li className={classes.headerulli}>
            <a id="filter" className={classes.headerullia} href="/filter">
              FILTER
            </a>
          </li>
          <li className={classes.headerulli}>
            <a id="iwell" className={classes.headerullia} href="/iwell">
              INJECTION WELL
            </a>
          </li>
          <li className={classes.headerulli}>
            <a id="blog" className={classes.headerullia} href="/blog">
              BLOG
            </a>
          </li>
          <li className={classes.headerulli}>
            <a id="aboutus" className={classes.headerullia} href="/about">
              ABOUT US
            </a>
          </li>
          <li className={classes.headerulli}>
            <a id="urbanecology" className={classes.headerullia} href="#">
              URBAN ECOLOGY
            </a>
          </li>
        </ul>

        <Button className={classes.button} variant="contained">
          contact us
        </Button>
      </header>

      <section class="banner"></section>

      {window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header.classList.toggle(classes.headersticky, window.scrollY > 0);

        var logo = document.getElementById("logotop");
        logo.classList.toggle(classes.headerstickylogo, window.scrollY > 0);

        var home = document.getElementById("home");
        home.classList.toggle(classes.headerstickylogo, window.scrollY > 0);

        var filter = document.getElementById("filter");
        filter.classList.toggle(classes.headerstickylogo, window.scrollY > 0);

        var iwell = document.getElementById("iwell");
        iwell.classList.toggle(classes.headerstickylogo, window.scrollY > 0);

        var blog = document.getElementById("blog");
        blog.classList.toggle(classes.headerstickylogo, window.scrollY > 0);

        var aboutus = document.getElementById("aboutus");
        aboutus.classList.toggle(classes.headerstickylogo, window.scrollY > 0);

        var urbanecology = document.getElementById("urbanecology");
        urbanecology.classList.toggle(
          classes.headerstickylogo,
          window.scrollY > 0
        );
      })}
    </>

    // home
  );
};

export default Nav;
