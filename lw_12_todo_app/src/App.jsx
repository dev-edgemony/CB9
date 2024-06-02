import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoWrapper from "./components/TodoWrapper/TodoWrapper";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <div className="main-div">
        <h1 className="main-title">List</h1>
        <h1 className="second-title">ember</h1>
        <div className="subtitle">
          <h2>The</h2>
          <h2 className="subtitle-list">list</h2>
          <h2>that helps you</h2>
          <h2 className="subtitle-remember">remember</h2>
        </div>
        <AddTodo setTodoItem={setTasks} tasks={tasks} />
        <div className="container">
          <TodoWrapper tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </>
  );
}

export default App;
