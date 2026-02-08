import { useUserLookup } from "../../common/hooks/useUserLookup";

export default function TaskCard({ task }) {
    const {getUserNameById} = useUserLookup()
  return ( 
    <div className="bg-white p-3 rounded shadow">
      <h3 className="font-medium capitalize">{task.title}</h3>
      <p className="text-xs text-gray-500 capitalize">
        Assignee: {getUserNameById(task.assigneeId)}
      </p>
      <p className="text-xs text-gray-500">
        Due: {task.dueDate || "N/A"}
      </p>
    </div>
  );
}