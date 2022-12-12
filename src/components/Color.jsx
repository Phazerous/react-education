import React from "react";
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";

export default function Color({
  id,
  title,
  color,
  rating,
  onRate,
  onRemove
}) {
  return (
    <section>
      <h1>{title}</h1>

      <button onClick={onRemove}>
        <FaTrash />
      </button>

      <div style={{ backgroundColor: color, height: 50 }} />
      <StarRating
        selectedStars={rating}
        onRate={onRate}
      />

    </section>
  );
}