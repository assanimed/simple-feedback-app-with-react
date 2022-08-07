import React from "react";

function RatingItem({ value, selected, handleChange }) {
  return (
    <li>
      <input
        type="radio"
        name="rating"
        value={value}
        id={`num${value}`}
        checked={selected === value}
        onChange={handleChange}
      />
      <label htmlFor={`num${value}`}>{value}</label>
    </li>
  );
}

export default RatingItem;
