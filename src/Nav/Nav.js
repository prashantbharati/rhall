import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./styles.js";
const Nav = () => {
  const classes = useStyles();
  return (
    <>
      <header className={classes.header}>
        <a href="#" id="logotop" className={classes.headerlogo}>
          Logo
        </a>

        <ul className={classes.headerul}>
          <li className={classes.headerulli}>
            <a className={classes.headerullia} href="#">
              Home
            </a>
          </li>
          <li className={classes.headerulli}>
            <a className={classes.headerullia} href="#">
              About
            </a>
          </li>
          <li className={classes.headerulli}>
            <a className={classes.headerullia} href="#">
              Services
            </a>
          </li>
          <li className={classes.headerulli}>
            <a className={classes.headerullia} href="#">
              Portfolio
            </a>
          </li>
          <li className={classes.headerulli}>
            <a className={classes.headerullia} href="#">
              Team
            </a>
          </li>
          <li className={classes.headerulli}>
            <a className={classes.headerullia} href="#">
              Contact
            </a>
          </li>
        </ul>
      </header>

      <section class="banner"></section>

      {window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header.classList.toggle(classes.headersticky, window.scrollY > 0);

        var links = document.querySelector("a");
        links.classList.toggle(classes.headerstickylogo, window.scrollY > 0);
      })}
    </>
  );
};

export default Nav;
