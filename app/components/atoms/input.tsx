import React from "react";

interface InputProps {
  className: string;
  placeholder: string;
  type?: "text";
  onChange: string;
}

const InputField: React.FC<InputProps> = ({ placeholder, type, className, onChange }) => {
  return (
    <div className="border border-black">
      <input type={type} className={className} placeholder={placeholder} onChange={onChange}/>
    </div>
  );
};

export default InputField;
