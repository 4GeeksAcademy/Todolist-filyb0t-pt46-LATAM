import React from "react";

const TodoInput = ({ inputValue, setInputValue, onCreateTask }) => {
  return (
    <li>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onCreateTask();
          }
        }}
        placeholder="Agregar una tarea"
      />
    </li>
  );
};

export default TodoInput;