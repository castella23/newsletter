import React, { useState } from "react";
import Task from "./Task";

const TaskList = ({
  tasks,
  onDeleteTask,
  onEditTask,
  onToggleTask,
  onDeleteCompletedTasks,
}) => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    } else if (filter === "uncompleted") {
      return !task.completed;
    }
    return true;
  });

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Task List</h3>
        <select
          value={filter}
          onChange={handleFilterChange}
          className="px-2 py-1 rounded-md bg-gray-200 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>

      {filteredTasks.length > 0 ? (
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2">Task Name</th>
              <th className="py-2">Description</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onDeleteTask={onDeleteTask}
                onEditTask={onEditTask}
                onToggleTask={onToggleTask}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">No tasks yet!</p>
      )}

      <button
        onClick={onDeleteCompletedTasks}
        className="mt-4 px-4 py-2 rounded-md bg-red-500 text-white font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Clear Completed Tasks
      </button>
    </div>
  );
};

export default TaskList;
