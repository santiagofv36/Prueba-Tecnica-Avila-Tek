"use client";

interface InputProps {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
  className?: string;
  icon?: React.ReactNode;
}
//TODO: Arreglar el icono colocarlo como un span y un flex-between

const Input = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className,
  icon,
}: InputProps) => {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border-solid border-[#D0D5DD] text-[#667085] font-light text-[16px] rounded-md p-3 ${className} w-[335px]`}
      />
      {icon && <div className="absolute right-4 top-5">{icon}</div>}
    </div>
  );
};

export default Input;
