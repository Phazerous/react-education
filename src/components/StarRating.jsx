import React from "react";
import Star from "./Star";
const createArray = length => [...Array(length)];

export default function StarRating({
  totalStars = 5,
  selectedStars = 3,
  onRate = f => f }) {

  return (
    <>
      {createArray(totalStars).map((n, i) => {
        return <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      })}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}