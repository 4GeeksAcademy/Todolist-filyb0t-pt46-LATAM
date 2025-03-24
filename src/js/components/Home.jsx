import React, { useEffect, useState } from "react";
import TodoList from "/src/js/components/TodoList";

const urlBase = "https://playground.4geeks.com/apis/fake/todos/user/filyb0t";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const getTask = async () => {
    try {
      let response = await fetch(urlBase);
      let data = await response.json();

      if (response.ok) {
        setTodos(data);
      } else if (response.status === 404) {
        await createUser();
        await getTask();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTask();
  }, []);

  const createUser = async () => {
    try {
      let response = await fetch(urlBase, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      if (response.ok) {
        console.log("Usuario creado con éxito.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (index) => {
    try {
      let updatedTodos = [...todos];
      updatedTodos.splice(index, 1);
      setTodos(updatedTodos);

      let response = await fetch(urlBase, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodos),
      });

      if (response.ok) {
        console.log("Tarea eliminada con éxito.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async () => {
    if (!inputValue.trim()) return;

    try {
      const newTask = { label: inputValue, done: false };
      const updatedTodos = [...todos, newTask];
      setTodos(updatedTodos);

      let response = await fetch(urlBase, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodos),
      });

      if (response.ok) {
        setInputValue("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAll = async () => {
    await fetch(urlBase, { method: "DELETE" });
    await fetch(urlBase, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([])
    });
    setTodos([]);
  };

  return (
    <TodoList
      todos={todos}
      inputValue={inputValue}
      setInputValue={setInputValue}
      onCreateTask={createTask}
      onDeleteTask={deleteTask}
      onDeleteAll={deleteAll}
    />
  );
};

export default App;