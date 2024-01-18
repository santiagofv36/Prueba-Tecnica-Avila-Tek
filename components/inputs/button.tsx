"use client";

interface ButtonProps {
  text: string;
  secondary?: boolean;
  onClick: () => void;
  className?: string;
}

// Boton generico con el color primario

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

