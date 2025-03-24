import React from "react";

const TodoItem = ({ item, index, onDeleteTask }) => {
  return (
    <li className="task-item">
      <span>{item.label}</span>
      <button 
        className="delete-btn"
        onClick={() => onDeleteTask(index)}
        aria-label="Eliminar tarea"
      >
        ×
      </button>
    </li>
  );
};

export default TodoItem;