import { useState } from "react";
import { useTodos } from "../context/Todo";
import PropTypes from "prop-types";

function Todo({ todo }) {
  const [editable, setEditable] = useState(false);
  const { updateTodos, deleteTodos, toggleComplete } = useTodos();
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  function updateTodo() {
    updateTodos(todo.id, { ...todo, todo: todoMsg });
    setEditable((prev) => !prev);
  }
  function toggleCompleted() {
    console.log(todo.id);
    toggleComplete(todo.id);
  }
  return (
    <div
      className={`${
        todo.isCompleted ? "bg-rose-900" : "bg-rose-500"
      } flex items-center py-2 px-8 gap-4 text rounded-md w-full`}
    >
      <div className="flex items-center justify-center">
        <input
          className="h-5 w-5 outline-none"
          type="checkbox"
          onChange={toggleCompleted}
          value={todo.isCompleted}
        />
      </div>
      <input
        className={`bg-transparent p-2 w-full text-[20px] text-white outline-none ${
          todo.isCompleted ? "line-through" : ""
        } ${editable ? "border-2 border-rose-900" : ""}`}
        type="text"
        readOnly={!editable}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      <div className="flex items-center gap-2">
        <button className="text-white p-1 text-2xl w-9 " onClick={updateTodo}>
          {editable ? (
            <ion-icon name="folder-open-outline"></ion-icon>
          ) : (
            <ion-icon name="create-outline"></ion-icon>
          )}
        </button>
        <button
          onClick={() => {
            deleteTodos(todo.id);
          }}
          className="text-white p-1 text-2xl w-9"
        >
          <ion-icon name="trash-bin-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
}
Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    todo: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
};
export default Todo;
