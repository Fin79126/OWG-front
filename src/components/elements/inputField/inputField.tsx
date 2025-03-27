// components/InputField.tsx
import React, { useState } from "react";
import { inputField, inputFieldFocus, label, container } from "./style.css";

interface InputFieldProps {
  labelText: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  labelText,
  type,
  value,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={container}>
      <label className={label}>{labelText}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`${inputField} ${isFocused ? inputFieldFocus : ""}`}
      />
    </div>
  );
};
