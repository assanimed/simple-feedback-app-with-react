import Card from "./Shared/Card";
import Button from "./Shared/Button";
import RatingSelect from "./Shared/RatingSelect";
import { useState, useEffect } from "react";
import { FaBtc } from "react-icons/fa";
import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";

function FeedBackForm() {
  const { addFeedBack, feedbackEdit, updateFeedBack } =
    useContext(FeedBackContext);
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [errMEssage, setErrMessage] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    const { edit, item } = feedbackEdit;
    if (edit) {
      setDisabled(false);
      setText(item.text);
      setRating(item.rating);
    }
  }, [feedbackEdit]);

  const handleChanges = (e) => {
    setText(e.target.value);

    if (text === "") {
      setDisabled(true);
      setErrMessage(null);
    } else if (text !== "" && text.trim().split(" ").length < 10) {
      setDisabled(true);
      setErrMessage("a review must have 10 words");
    } else {
      setDisabled(false);
      setErrMessage(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { edit, item } = feedbackEdit;
    // if (text.trim().split(" ").length >= 10) {
    if (text.trim().length >= 10) {
      const newFeedBack = {
        id: Math.round(Math.random() * 1000),
        rating,
        text,
      };
      if (edit) {
        updateFeedBack(item.id, newFeedBack);
      } else {
        addFeedBack(newFeedBack);
      }

      setText("");
      setRating(1);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Leave a review to our service !</h2>
        <RatingSelect rate={rating} select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            onChange={handleChanges}
            value={text}
            placeholder="write a review"
          />
          <Button isDisabled={disabled} type="submit">
            Submit
          </Button>
        </div>
        {errMEssage && (
          <div className="message">
            <FaBtc style={{ color: "blue" }} /> {errMEssage}
          </div>
        )}
      </form>
    </Card>
  );
}

export default FeedBackForm;
