import { useState, useEffect, useContext } from "react";

import RatingItem from "./RatingItem";
import FeedBackContext from "../../context/FeedBackContext";

function RatingSelect({ select, rate }) {
  const [selected, setSelected] = useState(rate);
  const { feedbackEdit } = useContext(FeedBackContext);

  useEffect(() => {
    const { item, edit } = feedbackEdit;
    if (edit) setSelected(item.rating);
  }, [feedbackEdit]);

  const handleChange = (e) => {
    setSelected(parseInt(e.currentTarget.value));
    select(parseInt(e.currentTarget.value));
  };
  return (
    <ul className="rating">
      <RatingItem value={1} selected={selected} handleChange={handleChange} />
      <RatingItem value={2} selected={selected} handleChange={handleChange} />
      <RatingItem value={3} selected={selected} handleChange={handleChange} />
      <RatingItem value={4} selected={selected} handleChange={handleChange} />
      <RatingItem value={5} selected={selected} handleChange={handleChange} />
      <RatingItem value={6} selected={selected} handleChange={handleChange} />
      <RatingItem value={7} selected={selected} handleChange={handleChange} />
      <RatingItem value={8} selected={selected} handleChange={handleChange} />
      <RatingItem value={9} selected={selected} handleChange={handleChange} />
      <RatingItem value={10} selected={selected} handleChange={handleChange} />
    </ul>
  );
}

export default RatingSelect;
