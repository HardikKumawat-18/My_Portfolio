import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./prototypecarousel.scss";

export const PrototypeCarousel = ({ slides }) => {
  const [slideWidth, setSlideWidth] = useState();
  const [noOfSlides, setNoOfSlides] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const [initOffSet, setInitOffSet] = useState();
  const prototype = document.querySelector(`.prototype-carousel`);
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

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

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
    <div className="prototype-carousel">
      <div className="track-container" {...handlers}>
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
                <img
                  src={`/images/high-fidelity-prototypes/${slide}`}
                  alt="high-fidelity-prototypes"
                  className={`slide ${index === activeIndex ? `active` : ``}`}
                  key={index}
                  onClick={() => updateIndex(index)}
                />
              );
            })}
        </div>
        <img className="phone-img" src="/images/Iphone.png" alt="Iphone" />
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
