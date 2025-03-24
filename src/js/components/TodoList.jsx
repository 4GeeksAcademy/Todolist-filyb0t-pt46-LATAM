import React from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  inputValue,
  setInputValue,
  onCreateTask,
  onDeleteTask,
  onDeleteAll,
}) => {
  return (
    <div className="container">
      <h1>My to-do list</h1>
      <ul>
        <TodoInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          onCreateTask={onCreateTask}
        />
        {todos.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            index={index}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
      <button onClick={onDeleteAll}>Borrar todo</button>
    </div>
  );
};

export default TodoList;