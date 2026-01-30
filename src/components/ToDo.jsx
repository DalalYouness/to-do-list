import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
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
          title="Supprimer la tâche"
          onClick={(e) => {
            e.stopPropagation();
            onHandleDelete(todo.id);
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>

        <button
          className="action-button edit-button"
          title="Modifier la tâche"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <FontAwesomeIcon icon={faPen} />
        </button>
      </div>
    </div>
  );
};

export default ToDo;
