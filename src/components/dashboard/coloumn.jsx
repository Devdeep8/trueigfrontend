import TaskCard from "./taskcard";

export default function Column({ column, tasks }) {
  return (
    <div className="bg-gray-100 rounded-xl p-4 min-h-75 w-full">
      <h2 className="font-semibold mb-3">{column.title}</h2>

      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
