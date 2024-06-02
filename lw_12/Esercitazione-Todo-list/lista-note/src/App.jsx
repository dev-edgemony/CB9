import { useState } from "react";

import "./App.css";
import Note from "./components/Note/Note.jsx";
import AddNote from "./components/AddNote/AddNote.jsx";

const App = () => {
  const [note, setNoteList] = useState([]);
  return (
    <div>
      <h1 className="titolo">Lista Note</h1>
      <AddNote setNote={setNoteList} />
      <div className="box">
        <ul className="lista-Note">
          {note.map((note, index) => (
            <Note key={index} text={note} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

// non riesco a fare funzionare l'app quando creo il componente separato. Di conseguenza non riesco ad inserire il button per chiudere la nota ed il checkbox per selezionare la nota.
