import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import Filtro from "./components/Filtro";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState({ status: "todos", category: "todas" });
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter(task => {
    const statusMatch = filter.status === "todos" || task.status === filter.status;
    const categoryMatch = filter.category === "todas" || task.category === filter.category;
    return statusMatch && categoryMatch;
  });

  const addTask = task => setTasks([...tasks, task]);

  const updateTask = updatedTask =>
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));

  const deleteTask = id => setTasks(tasks.filter(task => task.id !== id));

  return (
    <div className="app-container">
      <h1>Gestor de Tareas</h1>
      <Formulario
        onAdd={addTask}
        onUpdate={updateTask}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />
      <Filtro tasks={tasks} filter={filter} setFilter={setFilter} />
      <Lista tasks={filteredTasks} onDelete={deleteTask} onEdit={setEditingTask} />
    </div>
  );
}

export default App;
