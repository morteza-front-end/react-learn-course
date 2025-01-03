import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
const TaskManager = () => {
  const [tasks, setTasks] = useState([]); // ذخیره لیست وظایف
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (taskTitle) => {
    if (taskTitle) {
      setTasks([...tasks, taskTitle]); // افزودن وظیفه به لیست
    }
    setIsModalOpen(false);
  };

  const deleteTask = (id) => {
    let list = tasks.filter((task) => task.id !== id);
    setTasks([...list]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">مدیریت وظایف</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        افزودن وظیفه
      </button>
      <ul className="mt-6 w-1/2 bg-white rounded-lg shadow-lg p-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="p-2 border-b border-gray-300 last:border-none flex justify-between w-full"
          >
            <span>{task.title}</span>
            <button
              className="text-red-500"
              onClick={() => deleteTask(task.id)}
            >
              حذف
            </button>
          </li>
        ))}
      </ul>

      {isModalOpen && <AddTaskModal onAddTask={addTask} />}
    </div>
  );
};

export default TaskManager;
