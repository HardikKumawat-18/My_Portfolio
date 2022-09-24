import { useEffect } from "react";
import "./horizontaldrag.scss";

export const HorizontalDrag = ({ slides }) => {
  useEffect(() => {
    const slider = document.querySelector(`.track`);
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      slider.classList.add("active");
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const distance = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - distance;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseLeave);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseLeave);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <div className="horizontal-drag">
      <div className="track">
        {slides.map((slide, index) => {
          return (
            <img
              key={index}
              className="slide"
              src={`/images/wireframes/${slide}`}
              alt="wireframe"
            />
          );
        })}
      </div>
    </div>
  );
};
