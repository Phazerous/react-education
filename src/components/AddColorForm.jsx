import React, { useState } from "react";

export default function AddColorForm({
  onNewColor = f => f
}) {
  const [txtTitle, setTxtTitle] = useState("");
  const [hexColor, setHexColor] = useState("#000");

  const submit = e => {
    const title = txtTitle;
    const color = hexColor;
    onNewColor(title, color);
    setTxtTitle("");
    setHexColor("#000");
  }

  return (
    <form>
      <input value={txtTitle} onChange={e => setTxtTitle(e.target.value)} type="text" placeholder="color title" required />
      <input value={hexColor} onChange={e => setHexColor(e.target.value)} type="color" required />
      <button onClick={submit}>Add</button>
    </form>
  );
}