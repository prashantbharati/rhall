import React from "react";
import Home from "./Home/Home.js";
import Filter from "./Filter/Filter.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav/Nav.js";
const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/filter" exact element={<Filter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
