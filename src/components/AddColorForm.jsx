import React from "react";
import { useColors } from "./ColorProvider";
import { useInput } from "./hooks";

export default function AddColorForm() {
  const { addColor } = useColors();
  const [txtProps, resetTxt] = useInput("");
  const [colorProps, resetColor] = useInput("#000");

  const submit = e => {
    const title = txtProps.value;
    const color = colorProps.value;
    addColor(title, color);
    resetTxt();
    resetColor();
  }

  return (
    <form>
      {console.log(txtProps)}
      <input {...txtProps} type="text" placeholder="color title" required />
      <input {...colorProps} type="color" required />
      <button onClick={submit}>Add</button>
    </form>
  );
}