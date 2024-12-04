import { useState } from "react";
import "./AddNote.css";

const AddNote = ({ setNote = () => {} }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="box-input">
      <input
        className="input-note"
        type="text"
        placeholder="inserisci nota"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        className="button-note"
        type="button"
        onClick={() => {
          setNote((prev) => [...prev, inputValue]);
        }}
      >
        +
      </button>
    </div>
  );
};

export default AddNote;
