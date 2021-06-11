import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./components/Routes";
import { NavBar } from "./components/NavBar";
import api from "../utils/api";

export const App = () => {
  useEffect(() => {
    const fetchUser = async () => {
      {
        try {
          const result = await api.get(`users/me`);
          if (result.status === 200) {
            const data = result.data;
            console.log("DATA", data);
            return data;
          }
        } catch (error) {
          console.log("error", error);
        }
      }
    };
    fetchUser();
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes />
    </Router>
  );
};
