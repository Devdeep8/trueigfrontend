import { useState } from "react";

export function useColumns() {
  const [columns, setColumns] = useState([
    { id: "todo", title: "To Do" },
    { id: "inprogress", title: "In Progress" },
    { id: "done", title: "Done" },
  ]);

  // Optional helpers (for future)
  const addColumn = (title) => {
    const newColumn = {
      id: crypto.randomUUID(),
      title,
    };
    setColumns((prev) => [...prev, newColumn]);
  };

  const removeColumn = (id) => {
    setColumns((prev) => prev.filter((c) => c.id !== id));
  };

  return {
    columns,
    addColumn,
    removeColumn,
    setColumns, // in case you want full control later
  };
}
