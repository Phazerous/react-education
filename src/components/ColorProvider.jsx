import React, { createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";
import colorData from "../color-data.js";

const ColorContext = createContext();

export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData);

  const addColor = (title, color) => {
    const updatedColor = [...colors, {
      id: nanoid(),
      title,
      color,
      rating: 0
    }];
    setColors(updatedColor);
  }

  const removeColor = (id) => {
    const updatedColors = colors.filter(color => color.id !== id);
    setColors(updatedColors);
  }

  const rateColor = (id, rating) => {
    const updatedColors = colors.map(color => color.id === id ? { ...color, rating } : color);
    setColors(updatedColors);
  }

  return <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
    {children}
  </ColorContext.Provider>
}

