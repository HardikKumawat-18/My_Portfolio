import "./layout.scss";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop";

export const WithoutURL = () => {
  return (
    <>
      <div className="without-url">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};
