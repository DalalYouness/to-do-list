import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import EditToDo from "./EditToDo";
import { v4 as uuidv4 } from "uuid";
import { useRef, useState } from "react";

const ToDoWrapper = () => {
  const [todos, settodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const taskToEdit = useRef({
    id: null,
    task: "",
  });
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

  const handleEdit = (taskToEditName) => {
    taskToEdit.current = taskToEditName;
    setIsEditing(!isEditing);
  };

  const handleEditToDo = (editedTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === taskToEdit.current.id) {
        return { ...todo, task: editedTask };
      }
      return todo;
    });
    settodos(updatedTodos);
    setIsEditing(false);
  };

  return (
    <div className="todo-wrapper">
      <h1 className="todo-title">To-Do List</h1>

      {isEditing ? (
        <EditToDo editedTask={taskToEdit} onEditToDo={handleEditToDo} />
      ) : (
        <ToDoForm onAddToDo={handleAddTask} />
      )}

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
              onHandleEdit={handleEdit}
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
