import { useState } from "react";

const Modal = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = () => {
    onAddTask({ title: taskTitle, id: Math.random() * 10000 });
    setTaskTitle("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        <h2 className="text-xl font-bold mb-4">افزودن وظیفه جدید</h2>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="عنوان وظیفه را وارد کنید"
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />
        <div className="flex flex-row-reverse gap-4 justify-start">
          <button
            onClick={handleAddTask}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mr-2"
          >
            افزودن
          </button>
          <button
            onClick={() => onAddTask(null)}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
          >
            بستن
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
