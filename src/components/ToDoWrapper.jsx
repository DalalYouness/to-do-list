import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import { v4 as uuidv4 } from "uuid";

const ToDoWrapper = () => {
  const [todos, settodos] = useState([]);

  const handleAddTask = (task) => {
    settodos([
      ...todos,
      {
        id: uuidv4(),
        task: task,
        isCompleted: false,
        isEditing: false,
      },
    ]);
  };

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    settodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    settodos(filteredTodos);
  };

  return (
    <div className="todo-wrapper">
      <h1 className="todo-title">To-Do List</h1>
      <ToDoForm onAddToDo={handleAddTask} />
      <div className="todos-container">
        {todos.length === 0 ? (
          <p className="empty-message">
            Aucune tâche pour le moment. Ajoutez-en une ! 🎯
          </p>
        ) : (
          todos.map((todo) => (
            <ToDo
              onHandleDelete={handleDelete}
              onHandleComplete={handleComplete}
              key={todo.id}
              todo={todo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ToDoWrapper;
