import React, { useState, useEffect } from "react";
import navicon from "../images/navicon1.png";
import rainmaxlogo1 from "../images/rainmaxlogo1.png";
import useStyles from "./styles.js";
import close from "../images/close.png";
const Nav2 = () => {
  const classes = useStyles();
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 500px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 500px)")
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
  };

  const doit2 = () => {
    document.getElementById("nav2").style.display = "none";
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
              height: `${matches ? "100px" : "150px"}`,
              width: "1024",
            }}
            src={rainmaxlogo1}
            alt="logo"
          />

          <img
            style={{ height: "5vh", color: "white" }}
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
