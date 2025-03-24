import React from "react";

const TodoItem = ({ item, index, onDeleteTask }) => {
  return (
    <li key={index}>
      {item.label}
      <i className="fas fa-trash-alt" onClick={() => onDeleteTask(index)}></i>
    </li>
  );
};

export default TodoItem;