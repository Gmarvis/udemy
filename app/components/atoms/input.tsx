import React from "react";

interface InputProps {
  className: string;
  placeholder: string;
  type?: "text";
}

const InputField: React.FC<InputProps> = ({ placeholder, type, className }) => {
  return (
    <div className="border border-black">
      <input type={type} className={className} placeholder={placeholder}/>
    </div>
  );
};

export default InputField;
