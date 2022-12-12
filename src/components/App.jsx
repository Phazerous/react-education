import React, { useState } from "react";
import colorData from "../color-data.js";
import AddColorForm from "./AddColorForm.jsx";
import ColorList from "./ColorList.jsx";
import { nanoid } from "nanoid";

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

  const newColor = (title, color) => {
    const updatedColors = [...colors, {
      id: nanoid(),
      title: title,
      color: color,
      rating: 0
    }];
    console.log(color);
    setColors(updatedColors);
  }

  return (
    <>
      <AddColorForm
        onNewColor={newColor}
      />
      <ColorList
        colors={colors}
        onRemoveColor={removeColor}
        onRateColor={rateColor}
      />
    </>
  );
}