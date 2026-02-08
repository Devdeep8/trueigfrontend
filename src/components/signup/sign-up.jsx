import { useState } from "react";
import { FormController } from "../../common/components/reusable-form";
export default function SignupComponent() {
  const [formApi, setFormApi] = useState(null); // 👈 store controller API

  const fields = [
    {
      type: "input",
      name: "name",
      label: "Name",
      placeholder: "Enter Name",
      className: "",
      validation: { required: "Name is required" },
    },
    {
      type: "input",
      name: "email",
      label: "Email",
      placeholder: "Enter email",
      className: "",
      validation: {
        required: "Email is required",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Please enter a valid email address",
        },
      },
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
    <div className=" max-w-md flex flex-col mx-auto  p-6 space-y-6">
      <FormController
        fields={fields}
        defaultValues={{ email: "", password: "", remember: false }}
        onSubmit={(data) => console.log(data, "this is the data")}
        onFormReady={setFormApi}
      />

      <button
        onClick={() => formApi?.submit()}
        disabled={formApi?.isSubmitting}
        className="bg-black text-white px-4 py-2  rounded"
      >
        {formApi?.isSubmitting ? "Sign Up..." : "SignUp"}
      </button>
    </div>
  );
}
