import { useState, useRef } from "react";
import { FormController } from "../../common/components/reusable-form";
export default function LoginComponents() {
  const formApiRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fields = [
    {
      type: "input",
      name: "email",
      label: "Email",
      placeholder: "Enter email",
      className: "",
      validation: { required: "Email is required" },
    },
    {
      type: "password",
      name: "password",
      label: "Password",
      placeholder: "Enter password",
      className: "w-full",
      validation: { required: "Password is required" },
    },
    {
      type: "checkbox",
      name: "remember",
      label: "Remember me",
    },
  ];

  return (
    <div className=" max-w-md flex flex-col mx-auto p-6 space-y-6">
      <FormController
        fields={fields}
        defaultValues={{ email: "", password: "", remember: false }}
        onSubmit={async (data) => {
          await new Promise((r) => setTimeout(r, 1500)); // fake API
          console.log("FORM DATA:", data);
        }}
        onFormReady={(api) => (formApiRef.current = api)}
        onSubmittingChange={setIsSubmitting}
      />
      <button
        onClick={() => formApiRef.current?.submit()}
        disabled={isSubmitting}
        className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </div>
  );
}
