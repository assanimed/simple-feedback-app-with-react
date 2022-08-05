import FeedBackItem from "./FeedBackItem";

function FeedBackList({ feedbacks }) {
  if (!feedbacks || !feedbacks.length) return <h2> No feedbacks </h2>;

  return (
    <div className="feedback-list">
      {feedbacks.map((feedback) => (
        <FeedBackItem feedback={feedback} key={feedback.id} />
      ))}
    </div>
  );
}

export default FeedBackList;
