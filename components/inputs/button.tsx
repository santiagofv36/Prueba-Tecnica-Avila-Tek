"use client";

interface ButtonProps {
  text: string;
  secondary?: boolean;
  onClick: () => void;
  className?: string;
}

const Button = ({ text, secondary, onClick, className }: ButtonProps) => {
  return (
    <button
      className={` rounded-md ${className} ${
        secondary ? "bg-primary text-white" : "text-btn-tertiary"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
