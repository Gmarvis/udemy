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
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;