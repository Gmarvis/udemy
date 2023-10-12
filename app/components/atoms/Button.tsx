import React from 'react'

interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({label, onClick, type,className}) => {
  return (
    <div className="w-fit h-fit p-2">
      <button type={type} className={className} onClick={onClick}>
        {label}
      </button>

    </div>
  )
}

export default Button