import React, { useState } from "react";
import Heading from "./Heading";
import ToDoItem from "./ToDoItem";

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

  function deleteNote(id) {
    setNoteList(prevValues => {
      const notes = prevValues.filter((note, index) => index !== id);
      return notes;
    })
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
          {noteList.map((note, index) => {
            return <ToDoItem key={index} id={index} onClick={deleteNote} text={note} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
