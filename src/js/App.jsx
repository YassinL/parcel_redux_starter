import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./components/Routes";
import { NavBar } from "./components/NavBar";

export const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes />
    </Router>
  );
};
