import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import FormBuilder from "./FormBuilder";

export default function FormController({
  fields,
  defaultValues,
  onSubmit,
  onFormReady,
  asyncErrors,
  onSubmittingChange
}) {
  const {
    handleSubmit,
    control,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues , 
    mode : "onChange", 
    reValidateMode : "onBlur"
  });

  // Store API in ref so it doesn't change every render
  const apiRef = useRef(null);

  // 🔹 Expose form API only once (no infinite loop)
  useEffect(() => {
    if (!onFormReady) return;

    apiRef.current = {
      submit: handleSubmit(onSubmit),
      watch,
      get isSubmitting() {
        return isSubmitting;
      },
    };

    onFormReady(apiRef.current);

    // run only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

   useEffect(() => {
    onSubmittingChange?.(isSubmitting);
  }, [isSubmitting, onSubmittingChange]);


  // 🔹 Server/async validation errors (this is CORRECT to re-run)
  useEffect(() => {
    if (!asyncErrors) return;

    Object.entries(asyncErrors).forEach(([name, message]) => {
      setError(name, { type: "server", message });
    });
  }, [asyncErrors, setError]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormBuilder fields={fields} control={control} errors={errors} />
    </form>
  );
}
