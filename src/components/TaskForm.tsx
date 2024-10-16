import React, { useState } from "react";
import useTaskStore from "../store/useTaskStore";
import { FaPlus } from "react-icons/fa";

function TaskForm() {
  const { addTask } = useTaskStore();
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTaskName.trim()) {
      addTask({ nombre: newTaskName.trim(), checked: false });
      setNewTaskName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 justify-between">
      <input
        type="text"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        placeholder="Nueva tarea"
        className="text-slate-800 rounded p-1 w-full"
      />
      <button type="submit" className="rounded p-1 px-2 bg-blue-500"><FaPlus/></button>
    </form>
  );
}

export default TaskForm;
