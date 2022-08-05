import Card from "./Shared/Card";

function FeedBackItem({ feedback }) {
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

export default FeedBackItem;
