import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setInputText] = useState("");
  const [contentText, setContentText] = useState("");

  function handleInput(e) {
    const value = e.target.value;
    setInputText(value);
  }

  function handleContent(e) {
    const value = e.target.value;
    setContentText(value);
  }

  function onAdd(e) {
    e.preventDefault();

    props.onAdd(inputText, contentText);
    setInputText('');
    setContentText('');
  }

  return (
    <div>
      <form>
        <input onChange={handleInput} name="title" placeholder="Title" value={inputText} />
        <textarea onChange={handleContent} name="content" placeholder="Take a note..." rows="3" value={contentText} />
        <button onClick={onAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
