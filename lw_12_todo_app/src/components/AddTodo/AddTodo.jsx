import { useState } from "react";
import "./AddTodo.css";
import { nanoid } from "nanoid";

const AddTodo = ({ setTodoItem = () => {}, tasks = [] }) => {
  const [todo, setTodo] = useState("");
  return (
    <form type="submit" className="formWrapper">
      <input
        type="text"
        placeholder="Start typing..."
        className="todo-type"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        type="submit"
        className="todo-button"
        onClick={(e) => {
          e.preventDefault();
          setTodoItem([...tasks, { id: nanoid(), text: todo }]);
          setTodo("");
        }}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
