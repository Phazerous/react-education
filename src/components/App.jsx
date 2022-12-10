import React, { useState } from "react";
import Heading from "./Heading";

function App() {
  const [noteName, setNoteName] = useState("");
  const [noteList, setNoteList] = useState([]);

  function handleClick() {
    setNoteList([...noteList, noteName]);
    setNoteName('');
  }

  function handleChange(e) {
    setNoteName(e.target.value);
  }

  return (
    <div className="container">
      <Heading />
      <div className="form">
        <input type="text" onChange={handleChange} value={noteName} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {noteList.map(note => {
            return <li>{note}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
