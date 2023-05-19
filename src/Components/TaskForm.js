import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleTaskSubmit = (event) => {
    event.preventDefault();
    if (taskName.trim() === "") {
      return;
    }
    const newTask = {
      id: uuidv4(),
      name: taskName,
      description: taskDescription,
      completed: false,
    };
    onAddTask(newTask);
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <form onSubmit={handleTaskSubmit} className="mb-4 w-[30em] mx-auto border-blue ">
        <h1 className="font-bold text-[2.3em]">You can plan for your day today here!</h1>
        <br></br>

      <div className="flex flex-col space-y-2">
        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
          className="px-4 py-2 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
              <br></br>

        <textarea
          placeholder="Enter task description"
          value={taskDescription}
          onChange={(event) => setTaskDescription(event.target.value)}
          className="px-4 py-2 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        ></textarea>
      </div>
      <br></br>
      <button
        type="submit"
        className="px-4 py-2 rounded-md bg-green-500 text-white font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
