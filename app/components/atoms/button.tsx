import React from 'react';

type ButtonProps = {
  onClick: () => void;
  type: 'button' | 'submit' | 'reset';
  text: string;
  style?: React.CSSProperties
}

const Button: React.FC<ButtonProps> = ({ onClick, style, text }) => {
  return (
    <button
      onClick={onClick}
      type={type || 'button'}
      className={`bg-black-500 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;