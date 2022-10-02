import { useEffect, useState } from "react";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import "./prototypeDesktopCarousel.scss";

export const PrototypeDesktopCarousel = ({ slides }) => {
  const [slideWidth, setSlideWidth] = useState();
  const [noOfSlides, setNoOfSlides] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const [initOffSet, setInitOffSet] = useState();
  const prototype = document.querySelector(`.prototype-desktop-carousel`);
  const track = prototype?.querySelector(`.track`);
  let slideBy = slideWidth + 32;

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      setActiveIndex(noOfSlides - 1);
    } else if (newIndex < noOfSlides) {
      setActiveIndex(newIndex);
    } else {
      setActiveIndex(0);
    }
  };

  useEffect(() => {
    setSlideWidth(track?.querySelector(`.slide`).offsetWidth);
    setNoOfSlides(track?.querySelectorAll(`.slide`).length);
    if (noOfSlides % 2 === 0) {
      setInitOffSet(slideWidth / 2 + 16);
    } else {
      setInitOffSet(0);
    }
  }, [noOfSlides, slideWidth, track]);

  return (
    <div className="prototype-desktop-carousel">
      <div className="arrow-container">
        <HiOutlineArrowSmLeft
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className="arrow left"
        />
        <HiOutlineArrowSmRight
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          className="arrow right"
        />
      </div>
      <div className="track-container">
        <div
          className="track"
          style={{
            transform: `translateX(${
              initOffSet +
              slideBy * (Math.ceil(noOfSlides / 2 - 1) - activeIndex)
            }px)`,
          }}
        >
          {slides &&
            slides.map((slide, index) => {
              return (
                <div
                  key={index}
                  onClick={() => updateIndex(index)}
                  className={`slide ${index === activeIndex ? `active` : ``}`}
                >
                  <img
                    src={`/images/high-fidelity-prototypes/${slide}`}
                    alt="high-fidelity-prototypes"
                  />
                </div>
              );
            })}
        </div>
        <img className="mac-img" src="/images/imac.png" alt="imac" />
        <div className="indicators">
          {slides &&
            slides.map((slide, index) => {
              return (
                <button
                  className={`carousel-btn ${
                    index === activeIndex ? `active` : ``
                  }`}
                  onClick={() => {
                    updateIndex(index);
                  }}
                  key={index}
                ></button>
              );
            })}
        </div>
      </div>
    </div>
  );
};
