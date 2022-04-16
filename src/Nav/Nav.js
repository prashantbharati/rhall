import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";
const Nav = () => {
  const classes = useStyles();
  return (
    <>
      <header className={classes.header}>
        <a href="#" className={classes.headerlogo}>
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
      {/* 
      {window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header.classList.toggle("headersticky", window.scrollY > 0);
      })} */}
    </>
  );
};

export default Nav;
