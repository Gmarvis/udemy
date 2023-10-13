import React from "react";

interface InputProps {
  className: string;
  placeholder: string;
  type?: "text";
}

const InputField: React.FC<InputProps> = ({ placeholder, type }) => {
  return (
    <div>
      <input type={type} className="className" placeholder={placeholder} />
    </div>
  );
};

export default InputField;
