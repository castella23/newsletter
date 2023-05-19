import { useState } from "react";

function AddTaskForm({ onAddTask }) {

  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const [errorTask, setErrorTask] = useState('');
  // const [errorDescription, setErrorDescription] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskName);

    if (taskName.trim() === "" || description.trim() === "") {
     setErrorTask('All fields are required please!')
    
    }
    else{
      console.log(taskName);
      onAddTask(taskName.trim());
      setTaskName("");

    }

  };



  const handleTaskChange = (e) => {
    setTaskName(e.target.value);
    setErrorTask('')

  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);

  }


  return (


    <form onSubmit={handleSubmit} className="border border-black ml-[25em] w-[35em] h-[25em]  flex flex-col pl-[2.5em] ">
       <br></br>
      <br></br>
      <input
        type="text"
        value={taskName}
        onChange={handleTaskChange}
        placeholder="Enter task name"
        className="px-2 py-1 border rounded-lg mr-2 w-[30em] "
      />
      <span className="text-red-500">{errorTask}</span>
      <br></br>
      <br></br>
      <textarea name="descr" value={description} className="px-2 py-1 border rounded-lg mr-2 w-[30em]" placeholder="Add discription here" onChange={handleDescriptionChange} ></textarea>
      {/* <span className="text-red-500">{errorTask}</span> */}

      <br></br>
      <br></br>
      <div className="flex spacing">
      <button type="submit"  className="w-20 py-1 bg-blue-500 text-white rounded-lg">
        Add Task
      </button>
      <button type="submit"  className="w-20 py-1 bg-red-500 text-white rounded-lg ml-[19em]">
        Cancel
      </button>
      </div>
    </form>
  );
}

export default AddTaskForm;


