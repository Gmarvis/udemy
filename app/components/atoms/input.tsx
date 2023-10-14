import React from "react";

interface InputProps {
  className: string;
  value: string;  
  placeholder: string;
  type?: "text" | "checkbox" | "password";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

const InputField: React.FC<InputProps> = ({ placeholder, type, className, value, onChange }) => {
  return (
    <div className="border border-black">
      <input type={type} value={value} className={className} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default InputField;
