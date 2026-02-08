import Column from "./coloumn.jsx";

export default function Kanban({ columns, tasks }) {
  return (
    <div className="flex w-full max-w-full gap-4 mt-6">
      {columns.map((col) => (
        <Column
          key={col.id}
          column={col}
          tasks={tasks.filter((t) => t.status === col.id)}
        />
      ))}
    </div>
  );
}
