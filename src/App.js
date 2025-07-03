import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import "./App.css"; // Asegúrate de importar esto

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
      <TaskForm
        onAdd={addTask}
        onUpdate={updateTask}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />
      <FilterBar tasks={tasks} filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} onDelete={deleteTask} onEdit={setEditingTask} />
    </div>
  );
}

export default App;
