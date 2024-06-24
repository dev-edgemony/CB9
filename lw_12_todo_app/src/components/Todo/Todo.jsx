import { useState } from "react";
import "./Todo.css";

const Todo = ({ text, handleclick }) => {
  const [isActive, setIsActive] = useState(false);
  const changeActive = () => {
    setIsActive(!isActive);
  };
  return (
    <li className={`todo ${isActive ? "active-todo" : ""}`}>
      <span className="close-todo" onClick={handleclick}>
        X
      </span>{" "}
      {text}{" "}
      <span className="check-done-todo" onClick={changeActive}>
        {isActive ? (
          <img
            src="../src/assets/check-circle-fill.svg"
            alt="done"
            className="check-done"
          />
        ) : (
          <img
            src="../src/assets/check-circle.svg"
            alt="not done"
            className="check-not-done"
          />
        )}
      </span>
    </li>
  );
};

export default Todo;
