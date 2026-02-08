import { useEffect, useState } from "react";

export function useCreateTask({ onCreate }) {
  const handleCreateTask = async (data) => {
    try {
      const task = createTaskModel(data);

      const res = await fetch("http://localhost:4000/task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });

      if (!res.ok) {
        throw new Error("Failed to create task");
      }

      const savedTask = await res.json(); // 👈 what DB saved

      onCreate(savedTask); // update UI from DB response
      return savedTask;
    } catch (err) {
      console.error("Create task error:", err);
      throw err;
    }
  };

  return { handleCreateTask };
}


 const createTaskModel = (data) => {
  return {
    id: crypto.randomUUID(),
    title: data.title,
    status: data.status,      // column id
    priority: data.priority,
    dueDate: data.dueDate,
    assigneeId: data.assignee, // user id
    createdAt: new Date().toISOString(),
  };
};




export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:4000/task");
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error("Failed to fetch tasks", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return { tasks, setTasks, loading, refetch: fetchTasks };
}
