import Card from "./Shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";

function FeedBackItem({ feedback }) {
  const { deleteFeedback, editFeedback } = useContext(FeedBackContext);

  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button className="close" onClick={() => deleteFeedback(feedback.id)}>
        <FaTimes style={{ color: "red" }} />
      </button>
      <button className="edit" onClick={() => editFeedback(feedback)}>
        <FaEdit style={{ color: "red" }} />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

export default FeedBackItem;
