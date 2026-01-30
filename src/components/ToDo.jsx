import React from "react";

const ToDo = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.task}</h3>
        </div>
      ))}
    </div>
  );
};

export default ToDo;
