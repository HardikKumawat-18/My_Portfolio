import { useEffect } from "react";
import "./modal.scss";

export const Modal = ({ imgSrc, modalBool }) => {
  const handleClick = (e) => {
    if (e.target.className === `modal`) {
      modalBool(false);
    }
  };

  useEffect(() => {
    document.addEventListener(`click`, handleClick);

    return () => {
      document.removeEventListener(`click`, handleClick);
    };
  });

  return (
    <div className="modal">
      <div className="modal-inner">
        <img src={imgSrc} alt="" />
      </div>
    </div>
  );
};
