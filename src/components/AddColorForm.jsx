import React, { useRef } from "react";

export default function AddColorForm({
  onNewColor = f => f
}) {
  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = e => {
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    onNewColor(title, color);
    txtTitle.current.value = "";
    hexColor.current.value = "";
  }

  return (
    <form>
      <input ref={txtTitle} type="text" placeholder="color title" required />
      <input ref={hexColor} type="color" required />
      <button onClick={submit}>Add</button>
    </form>
  );
}