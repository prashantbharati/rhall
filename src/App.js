import React, { useState, useEffect } from "react";
import Home from "./Home/Home.js";
import Filter from "./Filter/Filter.js";
import Iwell from "./iwell/iwell.js";
import Blog from "./blog/blog.js";
import About from "./aboutus/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav/Nav.js";
import Nav2 from "./Nav/Nav2";
import Footer from "./footer.js";
const App = () => {
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
    <BrowserRouter>
      {matches2 ? <Nav2 /> : <Nav />}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/filter" exact element={<Filter />} />
        <Route path="/iwell" exact element={<Iwell />} />
        <Route path="/blog" exact element={<Blog />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
