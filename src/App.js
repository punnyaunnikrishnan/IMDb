// importing necessary modules and components
import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Detail from "./Components/Detail";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* separate route are given to each components to navigate to different urls  */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
