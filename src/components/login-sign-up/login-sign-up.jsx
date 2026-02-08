import { useRef } from "react";
import { FormController } from "../../common/components/reusable-form";
import { useLogin } from "./uselogin";
import { useNavigate } from "react-router-dom";
export default function LoginComponents() {
  const navigate = useNavigate()
  const formApiRef = useRef(null);
  const {login , isSubmitting } = useLogin()

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
      const user = await login(data);
      console.log("✅ Logged in:", user);

      alert("Login successful 🎉");
      navigate("/dashboard" , {replace : true})
    } catch (err) {
      // error already handled in hook
      alert("login error " , err)
      console.log(err)
    }
  };

  return (
    <div className=" max-w-md flex flex-col mx-auto p-6 space-y-6">
      <FormController
        fields={fields}
        defaultValues={{ email: "", password: "", remember: false }}
        onSubmit={handleLogin}
        onFormReady={(api) => (formApiRef.current = api)}
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
