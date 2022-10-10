import React from "react";
import "./layout.scss";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop";
import { SideBar } from "../SideBar/SideBar";

export const WithURL = () => {
  let screenWidth = window.innerWidth;

  return (
    <>
      <div className="with-url">
        {screenWidth <= 450 ? (
          <img className="url-bar" src="./images/URLMobile.png" alt="url-img" />
        ) : (
          <img
            className="url-bar"
            src="./images/URLDesktop.svg"
            alt="url-img"
          />
        )}
        <Navbar />
        <Outlet />
      </div>
      <Footer />
      <SideBar />
      <ScrollToTop />
    </>
  );
};
