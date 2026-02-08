export default function InputField({ field, rhfField }) {
  const { className, icon: Icon, placeholder, type = "text" } = field;

  return (
    <div className={`relative ${className || ""}`}>
      {Icon && <Icon className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />}
      <input
        {...rhfField}
        type={type}
        placeholder={placeholder}
        className={`border rounded p-2 w-full ${Icon ? "pl-8" : ""}`}
      />
    </div>
  );
}
