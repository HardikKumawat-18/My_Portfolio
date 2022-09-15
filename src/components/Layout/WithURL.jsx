import React from "react";
import "./layout.scss";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

export const WithURL = () => {
  return (
    <div className="with-url">
      <img className="url-bar" src="./images/URLDesktop.svg" alt="" />
      <Navbar />
      <Outlet />
    </div>
  );
};
