import React, { useState } from "react";
import useInput from "./useInput";

export default function AddColorForm({
  onNewColor = f => f
}) {
  const [txtProps, resetTxt] = useInput("");
  const [colorProps, resetColor] = useInput("#000");

  const submit = e => {
    const title = txtProps.value;
    const color = colorProps.value;
    onNewColor(title, color);
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