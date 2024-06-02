import "./TodoWrapper.css";
import Todo from "../Todo/Todo";

const TodoWrapper = ({ tasks = [], setTasks }) => {
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <ul className="todos-wrapper">
      {tasks.map((task, index) => (
        <Todo
          key={index}
          text={task.text}
          handleclick={() => deleteTask(task.id)}
        />
      ))}
    </ul>
  );
};
export default TodoWrapper;
