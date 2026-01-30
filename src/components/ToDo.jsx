import React from "react";

const ToDo = ({ onHandleDelete, onHandleComplete, todo }) => {
  return (
    <div
      className={`todo-item ${todo.isCompleted ? "completed" : ""}`}
      onClick={() => onHandleComplete(todo.id)}
    >
      <p className="todo-text">{todo.task}</p>
      <div className="todo-actions">
        <button
          className="action-button delete-button"
          onClick={(e) => {
            e.stopPropagation();
            onHandleDelete(todo.id);
          }}
        >
          delete
        </button>
        <button
          className="action-button edit-button"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          edit
        </button>
      </div>
    </div>
  );
};

export default ToDo;
