import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, type, className, children }) => {
  return (
    <button
      onClick={onClick}
      type={type || 'button'}
      className={`bg-black-500 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;