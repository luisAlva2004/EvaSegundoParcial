import React from "react";
import Item from "./Item";
import "../styles/lista.css";

function Lista({ tasks, onDelete, onEdit }) {
  if (tasks.length === 0) return <p>No hay tareas</p>;

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <Item key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  );
}

export default Lista;
