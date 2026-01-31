import React, { useState } from "react";

const EditToDo = ({ editedTask, onEditToDo }) => {
  const [taskValue, setTaskValue] = useState(editedTask.current.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskValue.trim() !== "") {
      handleTask();
    }
  };

  const handleTask = () => {
    if (taskValue.trim() !== "") {
      onEditToDo(taskValue);
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
      />
      <button className="add-button" type="submit">
        Edit Task
      </button>
    </form>
  );
};

export default EditToDo;
