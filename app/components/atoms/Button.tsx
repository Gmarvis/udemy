import React from "react";

interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  style: any;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type,
  className,
  style,
}) => {
  return (
    <div className="p-2">
      <button type={type} className={className} onClick={onClick} style={style}>
        {label}
      </button>
    </div>
  );
};

export default Button;
