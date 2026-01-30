import React, { useState } from "react";

const ToDoForm = ({ onAddToDo }) => {
  const [taskValue, setTaskValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskValue.trim() !== "") {
      handleTask();
    }
  };

  const handleTask = () => {
    if (taskValue.trim() !== "") {
      onAddToDo(taskValue);
      setTaskValue("");
    }
  };

  function handleChange(e) {
    setTaskValue(e.target.value);
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        onChange={handleChange}
        type="text"
        value={taskValue}
        placeholder="Add a new task..."
      />
      <button className="add-button" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default ToDoForm;
