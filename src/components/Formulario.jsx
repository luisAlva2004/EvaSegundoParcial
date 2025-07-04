import React, { useState, useEffect } from "react";
import "../styles/form.css";

function Formulario({ onAdd, onUpdate, editingTask, setEditingTask }) {
    const [formData, setFormData] = useState({ title: "", description: "", category: "--", status: "nuevo" });

useEffect(() => {
    if (editingTask) setFormData(editingTask);
}, [editingTask]);

const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

const handleSubmit = e => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    if (editingTask) {
        onUpdate(formData);
        setEditingTask(null);
    } else {
        onAdd({ ...formData, id: crypto.randomUUID(), createdAt: Date.now() });
    }
    setFormData({ title: "", description: "", category: "--", status: "nuevo" });
};

return (
  <form className="task-form" onSubmit={handleSubmit}>
    <input
      name="title"
      placeholder="Título"
      value={formData.title}
      onChange={handleChange}
    />
    <input
      name="description"
      placeholder="Descripción"
      value={formData.description}
      onChange={handleChange}
    />
    <select
      name="category"
      value={formData.category}
      onChange={handleChange}
    >
      <option value="--">--</option>
      <option value="escolar">Escolar</option>
      <option value="cotidiano">Cotidiano</option>
      <option value="trabajo">Trabajo</option>
    </select>
    <select
      name="status"
      value={formData.status}
      onChange={handleChange}
    >
      <option value="nuevo">Nuevo</option>
      <option value="en-proceso">En proceso</option>
      <option value="terminado">Terminado</option>
    </select>
    <button type="submit">
      {editingTask ? "Actualizar" : "Agregar"}
    </button>
  </form>
);

}

export default Formulario;
