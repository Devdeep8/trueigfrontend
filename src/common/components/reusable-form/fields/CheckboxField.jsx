export default function CheckboxField({ field, rhfField }) {
  const { label, className } = field;

  return (
    <label className={`flex items-center gap-2 ${className || ""}`}>
      <input type="checkbox" {...rhfField} />
      <span>{label}</span>
    </label>
  );
}
