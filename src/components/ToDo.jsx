import React from "react";

const ToDo = ({ todo, onHandleComplete }) => {
  const styleTask = {
    textDecoration: todo.isCompleted ? "line-through" : "none",
    border: "1px solid black",
    borderRadius: "5px",
    width: "300px",
    padding: "5px",
    margin: "10px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4a62a5ff",
    fontWeight: "bold",
    color: "white",
  };
  const styleButtons = {
    margin: "0 5px",
    outline: "none",
    border: "none",
    borderRadius: "5px",
    padding: "5px",
    cursor: "pointer",
  };
  return (
    <div style={styleTask}>
      <p>{todo.task}</p>
      <div>
        <button style={styleButtons} onClick={() => onHandleComplete(todo.id)}>
          complete
        </button>
        <button style={styleButtons}>edit</button>
      </div>
    </div>
  );
};

export default ToDo;
