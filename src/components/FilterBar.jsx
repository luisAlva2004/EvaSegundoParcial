import React from "react";

function FilterBar({ tasks, filter, setFilter }) {
const uniqueCategories = [...new Set(tasks.map(task => task.category))];

return (
    <div>
    <select value={filter.status} onChange={e => setFilter({ ...filter, status: e.target.value })}>
        <option value="todos">Todos</option>
        <option value="nuevo">Nuevo</option>
        <option value="en-proceso">En proceso</option>
        <option value="terminado">Terminado</option>
    </select>

    <select value={filter.category} onChange={e => setFilter({ ...filter, category: e.target.value })}>
        <option value="todas">Todas</option>
        {uniqueCategories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
        ))}
    </select>
    </div>
);
}

export default FilterBar;
