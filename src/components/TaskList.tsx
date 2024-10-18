import React from "react";
import useTaskStore from "../store/useTaskStore";
import TaskForm from "./TaskForm";
import { ImCross } from "react-icons/im";

const TaskList: React.FC = () => {
  const { tasks, toggleTask, removeTask } = useTaskStore();

  return (
    <div>
      <TaskForm />
      <ul className="my-4 flex flex-col gap-2">
        {tasks.map((task, index) => (
          <li className={`flex justify-between`} key={index}>
            <div
              className={`flex gap-6 ${
                task.checked ? "text-green-400 line-through" : ""
              }`}
            >
              {task.nombre} - {task.priority}
              <input
                type="checkbox"
                checked={task.checked}
                onChange={() => toggleTask(index)}
              />
            </div>
            <button
              className="rounded p-1 bg-red-500"
              onClick={() => removeTask(index)}
            >
              <ImCross className="h-2" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
