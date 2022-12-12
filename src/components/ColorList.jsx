import React from "react";
import Color from "./Color";

export default function ColorList({
  colors = [],
  onRemoveColor = f => f,
  onRateColor = f => f
}) {
  return (
    <>
      {console.log(colors)}
      {colors.map(color => {
        return <Color
          key={color.id}
          id={color.id}
          title={color.title}
          color={color.color}
          rating={color.rating}
          onRate={rating => onRateColor(color.id, rating)}
          onRemove={() => onRemoveColor(color.id)}
        />
      })}
    </>
  );
}