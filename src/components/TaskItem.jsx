import React from "react";
import "../styles/TaskItem.css";

function TaskItem({ task, onDelete, onEdit }) {
  return (
    <li className="task-item">
      <strong>{task.title}</strong> - {task.category} - {task.status}
      <p>{task.description}</p>
      <button onClick={() => onEdit(task)}>Editar</button>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </li>
  );
}

export default TaskItem;
