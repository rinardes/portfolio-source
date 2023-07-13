import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type MailMeField = {
  label: string;
  name: string;
  isMessage?: boolean;
  isRequired?: boolean;
  isSubmited: boolean;
};

type FormFieldValidation = string;

const validateMail = (value: string): FormFieldValidation => {
  let expression = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let result = value.match(expression);
  if (!result) return "Insira um email válido";
  return "";
};

const standardValidation = (value: string): FormFieldValidation => {
  if (value.length == 0) return "Este campo não pode ficar vazio!";
  return "";
};

const className =
  "w-full align-top px-4 text-sm rounded-sm bg-container border border-border outline-none focus:border-primary-400 focus:border-2";

function MailMeField({
  label,
  name,
  isMessage,
  isRequired = false,
  isSubmited,
}: MailMeField) {
  const [formValue, setformValue] = useState("");
  const [error, seterror] = useState("");

  useEffect(() => {
    if (isSubmited) {
      setformValue("");
    }
  }, [isSubmited]);

  const hasError = (value: string) => {
    return value != "";
  };

  const updateError = (value: string) => {
    if (hasError(value)) {
      seterror(value);
      return false;
    }
    return true;
  };

  const validateField = () => {
    if (!isRequired) return;
    let result: FormFieldValidation = "";
    seterror(result);
    result = standardValidation(formValue);
    updateError(result);

    if (name == "email") {
      result = validateMail(formValue);
    }

    updateError(result);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let value = e.currentTarget.value;
    setformValue(value);
  };

  return (
    <label className="">
      <p className="mb-4 text-xs uppercase tracking-widest">{label}</p>
      {isMessage ? (
        <textarea
          name={name}
          className={`${className} h-48 resize-none pl-4 pt-2`}
          value={formValue}
          onChange={handleChange}
        ></textarea>
      ) : (
        <input
          required={isRequired}
          type="text"
          name={name}
          className={twMerge(
            className,
            "h-14",
            error != "" && "border-error-500"
          )}
          value={formValue}
          onChange={handleChange}
          onBlur={validateField}
        />
      )}

      {/* prettier-ignore */}
      <pre
        className={twMerge(
          "mt-2 text-sm text-error-500",
          error == "" ? "hidden" : "block"
        )}
      >
        {error}
      </pre>
    </label>
  );
}

export default MailMeField;
