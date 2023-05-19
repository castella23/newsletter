import React, { useState } from "react";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, updatedTaskName) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, name: updatedTaskName };
        }
        return task;
      })
    );
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const deleteCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold my-4 ">Todo List</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
        onToggleTask={toggleTask}
        onDeleteCompletedTasks={deleteCompletedTasks}
      />
    </div>
  );
};

export default App;
