import { useState } from "react";

function TaskForm({ onTaskCreated, API_URL }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "To Do",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      setTask({
        title: "",
        description: "",
        status: "To Do",
      });

      onTaskCreated();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
      <div className="flex items-center gap-2 mb-5">
        <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
        <h2 className="text-lg font-bold text-slate-800 tracking-tight">
          Create New Task
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Title</label>
          <input
            type="text"
            placeholder="What needs to be done?"
            required
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Description</label>
          <textarea
            placeholder="Add some details or context..."
            required
            rows="3"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all resize-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Initial Status</label>
          <select
            value={task.status}
            onChange={(e) => setTask({ ...task, status: e.target.value })}
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-700 bg-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all appearance-none cursor-pointer"
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium text-sm py-2.5 px-4 rounded-xl shadow-sm shadow-indigo-200 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Saving...
            </>
          ) : (
            "Create Task"
          )}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;