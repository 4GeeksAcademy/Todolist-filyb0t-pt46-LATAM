import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    const [newTask, setNewTask] = useState("");
    const [todos, setTodos] = useState([]);
    const [hoverIndex, setHoverIndex] = useState(null);

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTodos([...todos, newTask]);
            setNewTask("");
        }
    };

    const writeTask = (event) => {
        setNewTask(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    };

    const deleteTask = (index) => {
        const newList = todos.filter((_, i) => i !== index);
        setTodos(newList);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center text-secondary">Todo List</h1>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Escribe una tarea..." 
                    value={newTask} 
                    onChange={writeTask}
                    onKeyDown={handleKeyDown}
                />
            </div>
            {todos.length === 0 ? (
                <p className="text-center text-muted">No hay tareas pendientes</p>
            ) : (
                <>
                    <ul className="list-group">
                        {todos.map((todo, index) => (
                            <li 
                                key={index} 
                                className="list-group-item d-flex justify-content-between align-items-center"
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(null)}
                                style={{ padding: "8px 12px" }}
                            >
                                <span className="flex-grow-1">{todo}</span>
                                {hoverIndex === index && (
                                    <div className="d-flex justify-content-end" style={{ minWidth: "30px" }}>
                                        <button 
                                            className="btn btn-danger btn-sm"
                                            style={{ padding: "0px 4px", fontSize: "10px", lineHeight: "1", minWidth: "20px", minHeight: "20px" }}
                                            onClick={() => deleteTask(index)}
                                        >
                                            ×
                                        </button>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <p className="text-end mt-2 text-muted">
                        {todos.length} tarea{todos.length !== 1 ? "s" : ""} restante{todos.length !== 1 ? "s" : ""}
                    </p>
                </>
            )}
        </div>
    );
};

export default Home;
