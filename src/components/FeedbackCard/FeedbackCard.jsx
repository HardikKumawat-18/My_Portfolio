import "./feedbackcard.scss";

export const FeedbackCard = ({ userName, imgSrc, feedback, index }) => {
  return (
    <div
      className="feedback"
      style={{
        flexDirection: `${index % 2 !== 0 ? `row-reverse` : `row`}`,
      }}
    >
      <div className="feedback-card">
        <img src={`/images/${imgSrc}`} alt="avatar" />
        <div className="content">
          <h2 className="user-name">{userName}</h2>
          <h3 className="feedback">{feedback}</h3>
        </div>
      </div>
      <div className="empty"></div>
    </div>
  );
};
