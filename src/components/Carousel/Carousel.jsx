import { Children, cloneElement, useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./carousel.scss";

const windowRes = window.innerWidth;

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

export const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [onScreen, setOnScreen] = useState(false);
  const carousel = useRef(null);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = Children.count(children) - 1;
    } else if (newIndex >= Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setOnScreen(true);
        observer.unobserve(carousel.current);
      }
    });
  });

  useEffect(() => {
    observer.observe(carousel.current);
    let interval;
    if (onScreen) {
      interval = setInterval(() => {
        updateIndex(activeIndex + 1);
      }, 2000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div className="carousel" ref={carousel}>
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${
            windowRes > 425
              ? (activeIndex >= Children.count(children) - 2
                  ? Children.count(children) - 3
                  : activeIndex) * 35
              : activeIndex * 100
          }%)`,
        }}
        {...handlers}
      >
        {Children.map(children, (child, index) => {
          return cloneElement(child, {
            width: `${windowRes <= 425 ? 100 : 35}%`,
          });
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
