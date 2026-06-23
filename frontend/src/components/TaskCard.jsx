function TaskCard({ task, onStatusChange, onDelete }) {
  if (!task) return null;

  // Modern subtle background badges with high-contrast text and border accent indicators
  const statusStyles = {
    "To Do": {
      badge: "bg-amber-50 text-amber-700 border-amber-200",
      border: "border-l-amber-500"
    },
    "In Progress": {
      badge: "bg-sky-50 text-sky-700 border-sky-200",
      border: "border-l-sky-500"
    },
    "Done": {
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      border: "border-l-emerald-500"
    },
  };

  const currentStyle = statusStyles[task.status] || { badge: "bg-slate-50 text-slate-700 border-slate-200", border: "border-l-slate-400" };

  return (
    <div className={`bg-white border border-slate-100 border-l-4 ${currentStyle.border} rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group`}>
      <div>
        <div className="flex justify-between items-start gap-4 mb-2">
          <span className="text-xs font-mono font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
            #{task._id?.slice(-4) || "0000"}
          </span>

          <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-semibold border ${currentStyle.badge}`}>
            {task.status}
          </span>
        </div>

        <h3 className="font-semibold text-slate-800 text-base leading-snug group-hover:text-indigo-600 transition-colors">
          {task.title}
        </h3>

        <p className="text-sm text-slate-500 mt-1.5 mb-5 line-clamp-3 leading-relaxed">
          {task.description}
        </p>
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-slate-50">
        <div className="relative inline-block w-36">
          <select
            value={task.status}
            onChange={(e) => onStatusChange(task._id, e.target.value)}
            className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg pl-2.5 pr-8 py-1.5 text-xs font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all cursor-pointer appearance-none"
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
            <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <button
          onClick={() => onDelete(task._id)}
          className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-150 group/btn"
          title="Delete Task"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 transition-transform group-hover/btn:scale-110">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TaskCard;