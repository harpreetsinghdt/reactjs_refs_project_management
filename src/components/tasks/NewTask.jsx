import React, { useState } from "react";

const NewTask = ({ onAdd = { onAddTask } }) => {
  const [task, setTask] = useState("");
  let inputClassV = "w-64 px-2 py-1 rounded-md bg-stone-200";
  const [inputClass, setInputClass] = useState(inputClassV);
  const handlechange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    if (task.trim() === "") {
      setInputClass(inputClass + " border-2 border-rose-600");
      return;
    }
    setInputClass(inputClassV);
    setTask("");
    onAdd(task);
  };
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className={inputClass}
        value={task}
        onChange={handlechange}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
