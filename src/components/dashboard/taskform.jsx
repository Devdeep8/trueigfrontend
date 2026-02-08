import { useRef } from "react";
import { FormController } from "../../common/components/reusable-form";

export default function TaskForm({ onCreateTask, users, columns, isSubmitting }) {
  const formApiRef = useRef(null);

  const fields = [
    {
      type: "input",
      name: "title",
      label: "Title",
      placeholder: "Task title",
      validation: { required: "Title is required" },
    },
    {
      type: "select",
      name: "status",
      label: "Status",
      options: columns.map((c) => ({
        label: c.title,
        value: c.id,
      })),
      validation: { required: "Status is required" },
    },
    {
      type: "select",
      name: "assignee",
      label: "Assignee",
      options: users.map((u) => ({
        label: u.name,
        value: u.id,
      })),
    },
    {
      type: "input",
      name: "dueDate",
      label: "Due Date",
      typeAttr: "date",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-4 max-w-md">
      <h2 className="text-lg font-semibold">Create Task</h2>

      <FormController
        fields={fields}
        defaultValues={{
          title: "",
          status: columns[0]?.id,
          assignee: "",
          dueDate: "",
        }}
        onSubmit={onCreateTask}
        onFormReady={(api) => (formApiRef.current = api)}
      />

      <button
        onClick={() => formApiRef.current?.submit()}
        disabled={isSubmitting}
        className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {isSubmitting ? "Creating..." : "Create Task"}
      </button>
    </div>
  );
}
