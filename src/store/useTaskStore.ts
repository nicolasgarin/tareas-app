import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Task } from '../types/Task';

interface TaskState {
  tasks: Task[];
  addTask: (task: Task) => void;
  toggleTask: (index: number) => void;
  removeTask: (index: number) => void;
}

const sortTasks = (tasks: Task[]): Task[] => {
  return tasks.sort((a, b) => {
    if (a.checked === b.checked) {
      return a.nombre.localeCompare(b.nombre);
    }
    return a.checked ? 1 : -1;
  });
};

const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (task) => set((state) => ({ tasks: sortTasks([...state.tasks, task]) })),
      toggleTask: (index) =>
        set((state) => {
          const updatedTasks = state.tasks.map((task, i) =>
            i === index ? { ...task, checked: !task.checked } : task
          );
          return { tasks: sortTasks(updatedTasks) };
        }),
      removeTask: (index) =>
        set((state) => ({
          tasks: state.tasks.filter((_, i) => i !== index),
        })),
    }),
    {
      name: 'task-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useTaskStore;