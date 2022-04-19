import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./styles.js";
import rainmaxlogo1 from "../images/rainmaxlogo1.png";
const Nav = () => {
  const classes = useStyles();
  return (
    <>
      <header className={classes.header}>
        <a href="#" id="logotop" className={classes.headerlogo}>
          <img
            style={{
              opacity: "1",
              padding: "5px",
              height: "70px",
              width: "1024",
            }}
            src={rainmaxlogo1}
            alt="logo"
          />
          {/* logo */}
        </a>

        <ul className={classes.headerul}>
          <li className={classes.headerulli}>
            <a id="home" className={classes.headerullia} href="#">
              <Typography>Home </Typography>
            </a>
          </li>
          <li className={classes.headerulli}>
            <a id="filter" className={classes.headerullia} href="#">
              <Typography>Filter</Typography>
            </a>
          </li>
          <li className={classes.headerulli}>
            <a id="iwell" className={classes.headerullia} href="#">
              <Typography>Injection Well</Typography>
            </a>
          </li>
          <li className={classes.headerulli}>
            <a id="blog" className={classes.headerullia} href="#">
              <Typography>Blog</Typography>
            </a>
          </li>
          <li className={classes.headerulli}>
            <a id="aboutus" className={classes.headerullia} href="#">
              <Typography>About Us</Typography>
            </a>
          </li>
          <li className={classes.headerulli}>
            <a id="urbanecology" className={classes.headerullia} href="#">
              <Typography>Urban Ecology</Typography>
            </a>
          </li>
        </ul>
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
