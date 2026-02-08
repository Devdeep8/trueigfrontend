import { Controller } from "react-hook-form";
import InputField from "./fields/InputField";
import PasswordField from "./fields/PasswordField";
import CheckboxField from "./fields/CheckboxField";

const FIELD_MAP = {
  input: InputField,
  password: PasswordField,
  checkbox: CheckboxField,
};

export default function FormBuilder({ fields, control, errors }) {
  return (
    <div className="space-y-4">
      {fields.map((field) => {
        const FieldComponent = FIELD_MAP[field.type];

        if (!FieldComponent) {
          return <p key={field.name}> Unsupported field: {field.type}</p>;
        }
        return (
          <div key={field.name} className="flex flex-col gap-1">
            {field.label && field.type !== "checkbox" && (
              <label className=" text-sm font-medium"> {field.label}</label>
            )}

            <Controller
              name={field.name}
              control={control}
              rules={field.validation}
              render={({ field: rhfField }) => (
                <FieldComponent field={field} rhfField={rhfField} />
              )}
            />
            {errors[field.name] && (
              <p className=" text-red-500 text-xs">
                {errors[field.name]?.message}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
