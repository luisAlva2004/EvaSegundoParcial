import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onEdit }) {
if (tasks.length === 0) return <p>No hay tareas</p>;

return (
    <ul>
        {tasks.map(task => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
        ))}
    </ul>
);
}

export default TaskList;
