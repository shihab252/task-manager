import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchTasks = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      console.log("Tasks:", data);

      setTasks(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const columns = ["To Do", "In Progress", "Done"];

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <h1 className="text-3xl font-bold text-slate-800">
            Task Manager
          </h1>
          <p className="text-slate-500 text-sm">
            Manage your tasks efficiently
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-12 gap-6">

          <div className="lg:col-span-4">
            <TaskForm
              onTaskCreated={fetchTasks}
              API_URL={API_URL}
            />
          </div>

          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-3 gap-4">
              {columns.map((column) => {
                const filteredTasks = tasks.filter(
                  (task) => task?.status === column
                );

                return (
                  <div
                    key={column}
                    className="bg-white rounded-xl border border-slate-200 p-4"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="font-bold text-slate-700">
                        {column}
                      </h2>

                      <span className="bg-slate-100 px-2 py-1 rounded-md text-xs font-semibold">
                        {filteredTasks.length}
                      </span>
                    </div>

                    <div className="space-y-3">
                      {filteredTasks.map((task) => (
                        <TaskCard
                          key={task._id}
                          task={task}
                          onStatusChange={handleStatusChange}
                          onDelete={handleDelete}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {loading && (
              <div className="text-center mt-6 text-slate-500">
                Loading tasks...
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;