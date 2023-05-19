import React, { useState } from "react";
import { TrashIcon, PencilIcon } from "@heroicons/react/solid";

const Task = ({ task, onDeleteTask, onEditTask, onToggleTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTaskName, setUpdatedTaskName] = useState(task.name);
  const [updatedTaskDescription, setUpdatedTaskDescription] = useState(
    task.description
  );

 
  const handleTaskEdit = (event) => {
    event.preventDefault();
    onEditTask(task.id, updatedTaskName, updatedTaskDescription);
    setIsEditing(false);
  };
  
  return (
    <tr className={`${task.completed ? "line-through" : ""}`}>
      <td className="py-2">{task.name}</td>
      <td className="py-2">{task.description}</td>
      <td className="py-2 flex items-center space-x-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        {isEditing ? (
          <>
            <form onSubmit={handleTaskEdit} className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Update task name"
                value={updatedTaskName}
                onChange={(event) => setUpdatedTaskName(event.target.value)}
                className="px-2 py-1 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Update task description"
                value={updatedTaskDescription}
                onChange={(event) =>
                  setUpdatedTaskDescription(event.target.value)
                }
                className="px-2 py-1 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-2 py-1 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-2 py-1 bg-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Cancel
              </button>
            </form>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <PencilIcon className="h-4 w-4" />
              <span className="sr-only">Edit task</span>
            </button>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="p-2 rounded-md text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <TrashIcon className="h-4 w-4" />
              <span className="sr-only">Delete task</span>
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default Task;
