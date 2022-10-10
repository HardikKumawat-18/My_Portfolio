import React from "react";
import "./layout.scss";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop";
import { SideBar } from "../SideBar/SideBar";

export const WithURL = () => {
  return (
    <>
      <div className="with-url">
        <img className="url-bar" src="./images/URLDesktop.svg" alt="url-img" />
        <Navbar />
        <Outlet />
      </div>
      <Footer />
      <SideBar />
      <ScrollToTop />
    </>
  );
};
