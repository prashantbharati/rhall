import React, { useState, useEffect } from "react";
import navicon from "../images/navicon1.png";
import rainmaxlogo1 from "../images/rainmaxlogo1.png";
import useStyles from "./styles.js";
import close from "../images/close.png";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles2 = makeStyles((theme) => ({
  link: {
    fontSize: "17px",
    fontWeight: "500",
    textTransform: "uppercase",
    display: "block",
    color: "black",
    textDecoration: "none",
    padding: "0 15px",
  },
  animatedItem: {
    animation: `$myEffect 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  animatedItemExiting: {
    animation: `$myEffectExit 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  animatedItemExitingRight: {
    animation: `$myEffectExitright 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  animatedItem3: {
    animation: `$myEffectExit3 1000ms ${theme.transitions.easing.easeInOut}`,
  },

  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  "@keyframes myEffectExit": {
    "0%": {
      opacity: 1,
      transform: "translateX(0)",
    },
    "100%": {
      opacity: 0,
      transform: "translateX(-200%)",
    },
  },

  "@keyframes myEffectExitright": {
    "0%": {
      opacity: 0,
      transform: "translateX(200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },

  "@keyframes myEffectExit3": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

const Nav2 = () => {
  const classes = useStyles();
  const classes2 = useStyles2();
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 600px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 600px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const [matches2, setMatches2] = useState(
    window.matchMedia("(max-width: 1300px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 1300px)")
      .addEventListener("change", (e) => setMatches2(e.matches));
  }, []);

  const doit = () => {
    document.getElementById("nav2").style.display = "flex";
    document.getElementById("nav2").classList.toggle(classes2.animatedItem);
    document.getElementById("nav2").style.transform = "translateX(0%)";
  };

  const doit2 = () => {
    document
      .getElementById("nav2")
      .classList.toggle(classes2.animatedItemExiting);
    document.getElementById("nav2").style.transform = "translateX(-200%)";
  };

  return (
    <>
      <div
        id="nav2"
        style={{
          width: "375px",
          height: "100vh",
          position: "fixed",
          backgroundColor: "white",
          display: "none",
          flexDirection: "column",

          zIndex: "100",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {" "}
          <img
            style={{
              opacity: "1",
              padding: "5px",
              height: `${matches ? "40px" : "50px"}`,
              width: "1024",
            }}
            src={rainmaxlogo1}
            alt="logo"
          />
          <img
            style={{
              opacity: "1",
              padding: "5px",
              height: `${matches ? "40px" : "50px"}`,
              width: "1024",
            }}
            onClick={doit2}
            src={close}
            alt="logo"
          />
        </div>
        <br />

        <a className={classes2.link} href="/">
          <Typography>HOME</Typography>
        </a>
        <br />

        <a className={classes2.link} href="/filter">
          <Typography>FILTER</Typography>
        </a>
        <br />

        <a className={classes2.link} href="/iwell">
          <Typography> INJECTION WELL</Typography>
        </a>
        <br />

        <a className={classes2.link} href="/blog">
          <Typography>BLOG</Typography>
        </a>
        <br />

        <a className={classes2.link} href="/about">
          <Typography>ABOUT US</Typography>
        </a>
        <br />

        <a className={classes2.link} href="/">
          <Typography> URBAN ECOLOGY</Typography>
        </a>
      </div>

      <header
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          transition: "0.6s",
          padding: "40px 100px",
          zIndex: "10",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <img
            style={{
              opacity: "1",
              padding: "5px",
              height: `${matches ? "70px" : "150px"}`,
              width: "1024",
            }}
            src={rainmaxlogo1}
            alt="logo"
          />
          <br /> <br />
          <img
            style={{ height: "5vh", marginTop: "10px", color: "white" }}
            src={navicon}
            onClick={doit}
            alt=""
          />
        </div>
        {window.addEventListener("scroll", function () {
          var header = document.querySelector("header");
          header.classList.toggle(classes.headersticky2, window.scrollY > 0);
        })}
      </header>
    </>
  );
};

export default Nav2;
