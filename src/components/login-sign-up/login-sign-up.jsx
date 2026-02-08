import { useState, useRef } from "react";
import { FormController } from "../../common/components/reusable-form";
import db from "../../database/db.json";
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
  const handleLogin = async (data) => {
    try {
      setIsSubmitting(true);

      // fake API delay
      await new Promise((r) => setTimeout(r, 1200));

      const user = db.users.find(
        (u) => u.email === data.email && u.password === data.password,
      );

      if (!user) {
        throw new Error("Invalid email or password");
      }

      console.log("✅ Logged in user:", user);

      // Optional: store session
      localStorage.setItem("user", JSON.stringify(user));

      alert("Login successful 🎉");
    } catch (err) {
      alert("not login" , err)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" max-w-md flex flex-col mx-auto p-6 space-y-6">
      <FormController
        fields={fields}
        defaultValues={{ email: "", password: "", remember: false }}
        onSubmit={handleLogin}
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
