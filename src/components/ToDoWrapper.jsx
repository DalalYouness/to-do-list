import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

const ToDoWrapper = () => {
  const [todos, settodos] = useState([]);
  const handleAddTask = (task) => {
    settodos([
      ...todos,
      {
        id: todos.length + 1,
        task: task,
        isCompleted: false,
        isEditing: false,
      },
    ]);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      {console.table(todos)}
      <ToDoForm onAddToDo={handleAddTask} />
      {todos.map((todo) => (
        <ToDo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ToDoWrapper;
