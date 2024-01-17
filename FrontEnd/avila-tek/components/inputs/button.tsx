"use client";

interface ButtonProps {
  text: string;
  secondary?: boolean;
  onClick: () => void;
}

const Button = ({ text, secondary, onClick }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 rounded-md ${
        secondary ? "bg-primary text-white" : "text-btn-tertiary"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
