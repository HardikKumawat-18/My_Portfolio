import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

export const WithoutURL = () => {
  return (
    <div className="without-url">
      <Navbar />
      <Outlet />
    </div>
  );
};
