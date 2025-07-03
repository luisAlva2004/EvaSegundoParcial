import React from "react";
import TaskItem from "./TaskItem";
import "../styles/TaskList.css";

function TaskList({ tasks, onDelete, onEdit }) {
  if (tasks.length === 0) return <p>No hay tareas</p>;

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  );
}

export default TaskList;
