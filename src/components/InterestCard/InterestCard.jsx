import "./interestcard.scss";

export const InterestCard = ({ cardData }) => {
  const { imgUrl, imgName, title, description } = cardData;

  return (
    <div className="interest-card">
      <img
        className="interest-logo"
        src={imgUrl || `./images/${imgName}.png`}
        alt=""
      />
      <div className="content">
        <h3 className="interest-title">{title}</h3>
        <p className="interest-desc">{description}</p>
      </div>
    </div>
  );
};
