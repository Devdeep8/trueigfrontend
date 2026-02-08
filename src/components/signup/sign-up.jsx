import { useState, useRef } from "react";
import { FormController } from "../../common/components/reusable-form";
export default function SignupComponent() {
  const formApiRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      const res = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: crypto.randomUUID(),
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      const user = await res.json();
      console.log("User created:", user);
      alert("Signup successful 🎉");
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogaind = async (data) => {
    formApiRef.current = data;
    console.log(data, "debug");
  };

  const handleSubmitting = (data) => {
    console.log(data);
    setIsSubmitting(data);
  };

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
      onChange: (value) => {
        console.log("Email changed:", value);
        // e.g. debounce API: checkEmailExists(value)
      },
      onBlur: (value) => {
        console.log("Email blurred:", value);
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
        onSubmit={handleSubmit}
        onFormReady={handleLogaind}
        onSubmittingChange={handleSubmitting}
      />

      <button
        onClick={() => formApiRef.current?.submit()}
        disabled={isSubmitting}
        className="bg-black text-white px-4 py-2  rounded"
      >
        {isSubmitting ? "Sign Up..." : "SignUp"}
      </button>
    </div>
  );
}
