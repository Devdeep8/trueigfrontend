import { useState } from "react";

export default function PasswordField({ field, rhfField }) {
  const { className, icon: Icon, placeholder } = field;
  const [show, setShow] = useState(false);

  return (
    <div className={`relative ${className || ""}`}>
      {Icon && <Icon className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />}
      <input
        {...rhfField}
        type={show ? "text" : "password"}
        placeholder={placeholder}
        className={`border rounded p-2 w-full ${Icon ? "pl-8" : ""}`}
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-xs"
      >
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}
