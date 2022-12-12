import React, { useState } from "react";
import colorData from "../color-data.js";
import ColorList from "./ColorList.jsx";

export default function App() {
  const [colors, setColors] = useState(colorData);

  const rateColor = (id, rating) => {
    const updateColors = colors.map(color => color.id === id ? { ...color, rating } : color);
    setColors(updateColors);
  }

  const removeColor = (id) => {
    const updatedColors = colors.filter(color => color.id !== id);
    setColors(updatedColors);
  }

  return (
    <>
      <ColorList
        colors={colors}
        onRemoveColor={removeColor}
        onRateColor={rateColor}
      />
    </>
  );
}