import { useState } from "react";
import Kanban from "./kanbanBoard.jsx";
import TaskForm from "./taskform.jsx";
import { useUsers } from "../../common/hooks/useUser.jsx";
import { useColumns } from "../../common/hooks/useColumns.jsx";
import { useTasks , useCreateTask } from "./hooks/useTask.jsx";
export default function Dashboard() {
  const { columns } = useColumns();
  const { users } = useUsers();
  const { tasks, setTasks } = useTasks();

  const [open, setOpen] = useState(false);

  const { handleCreateTask } = useCreateTask({
    onCreate: (task) => {
      setTasks((prev) => [...prev, task]);
      setOpen(false); // close dialog
    },
  });

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Task Dashboard</h1>

        <button
          onClick={() => setOpen(true)}
          className="bg-black text-white px-4 py-2 rounded"
        >
          + Create Task
        </button>
      </div>

      <Kanban columns={columns} tasks={tasks} />

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg w-full max-w-lg p-6 relative">
            <h2 className="text-lg font-semibold mb-4">Create Task</h2>

            <TaskForm
              onCreateTask={handleCreateTask}
              users={users}
              columns={columns}
            />

            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
