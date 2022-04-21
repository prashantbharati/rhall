import React, { useState } from "react";
import { Home } from "./Home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [posts, setPosts] = useState([]);

  return <Home />;
};

export default App;
