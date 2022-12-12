import React from "react";
import Color from "./Color";
import { useColors } from "./ColorProvider";

export default function ColorList() {
  const { colors, rateColor, removeColor } = useColors();

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
          onRate={rating => rateColor(color.id, rating)}
          onRemove={() => removeColor(color.id)}
        />
      })}
    </>
  );
}