import React from "react";

interface InputProps {
  className: string;
  placeholder: string;
  type?: "text" | "checkbox";
  onChange: string;
}

const InputField: React.FC<InputProps> = ({ placeholder, type, className, onChange }) => {
  return (
    <div className="border border-black">
      <input type={type} className={className} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
