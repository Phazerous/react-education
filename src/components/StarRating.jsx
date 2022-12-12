import React, { useState } from "react";
import Star from "./Star";

const createArray = length => [...Array(length)];

function StarRating({ style = {}, totalStars = 3 }) {
  const [selectedStars, setSelectedStars] = useState(totalStars);

  return (
    <>
      {createArray(totalStars).map((n, i) => {
        return <Star key={i} id={i} selected={selectedStars > i} style={{ color: "red", ...style }} handleClick={() => setSelectedStars(i + 1)} />
      })}
    </>
  );
}

export default StarRating;