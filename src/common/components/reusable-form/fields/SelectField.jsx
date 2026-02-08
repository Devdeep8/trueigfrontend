export default function SelectField({ field, rhfField }) {
  const { options = [], className } = field;

  return (
    <select
      {...rhfField}
      className={`border rounded p-2 w-full ${className || ""}`}
    >
      <option value="">Select...</option>

      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
