import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(title, content) {
    setNotes(prevValues => {
      const updatedValues = [...prevValues, { title: title, content: content, id: nanoid() }];
      return updatedValues;
    })
  }

  function deleteNote(id) {
    setNotes(prevValues => {
      const updatedValues = prevValues.filter(note => note.id !== id);
      return updatedValues;
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map(note => {
        return <Note key={note.id} id={note.id} title={note.title} content={note.content} onDelete={deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;
