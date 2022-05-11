import React, { useState, useEffect } from "react";
import navicon from "../images/navicon1.png";
import rainmaxlogo1 from "../images/rainmaxlogo1.png";
import useStyles from "./styles.js";
const Nav2 = () => {
  const classes = useStyles();
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
  return (
    <>
      <header
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          transition: "0.6s",
          padding: "40px 100px",
          zIndex: "10000",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <img
            style={{
              opacity: "1",
              padding: "5px",
              height: "150px",
              width: "1024",
            }}
            src={rainmaxlogo1}
            alt="logo"
          />

          <img style={{ height: "5vh", color: "white" }} src={navicon} alt="" />
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
