import React, { useState } from "react";

const ToDoForm = ({ onAddToDo }) => {
  const [taskValue, setTaskValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleTask = () => {
    onAddToDo(taskValue);
    setTaskValue("");
  };

  function handleChange(e) {
    setTaskValue(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        value={taskValue}
        placeholder="Add a new task..."
      />
      <button type="submit" onClick={handleTask}>
        Add Task
      </button>
    </form>
  );
};

export default ToDoForm;
