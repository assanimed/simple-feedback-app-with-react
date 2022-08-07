import FeedBackContext from "../context/FeedBackContext";
import { useContext } from "react";

function FeedbackStats() {
  const { feedbacks } = useContext(FeedBackContext);

  const average = (
    feedbacks.reduce((acc, val) => {
      return acc + val.rating;
    }, 0) / feedbacks.length
  )
    .toFixed(1)
    .replace(/[,.]0$/, "");

  return (
    <div className="feedback-stats">
      <h4> {feedbacks.length} Reviews </h4>
      <h4> Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
