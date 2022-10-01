import { Children, cloneElement, useEffect, useState } from "react";
import "./carousel.scss";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

export const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = Children.count(children) - 1;
    } else if (newIndex >= Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 2000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${
            (activeIndex >= Children.count(children) - 2
              ? Children.count(children) - 3
              : activeIndex) * 35
          }%)`,
        }}
      >
        {Children.map(children, (child, index) => {
          return cloneElement(child, { width: "35%" });
        })}
      </div>

      <div className="indicators">
        {Children.map(children, (child, index) => {
          return (
            <button
              className={`carousel-btn ${
                index === activeIndex ? `active` : ``
              }`}
              onClick={() => {
                updateIndex(index);
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
};
