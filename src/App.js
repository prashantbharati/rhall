import React from "react";
import Home from "./Home/Home.js";
import Filter from "./Filter/Filter.js";
import Iwell from "./iwell/iwell.js";
import Blog from "./blog/blog.js";
import About from "./aboutus/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav/Nav.js";
import Footer from "./footer.js";
const App = () => {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
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
