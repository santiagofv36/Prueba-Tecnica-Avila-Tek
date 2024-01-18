"use client";

interface InputProps {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
  className?: string;
  icon?: React.ReactNode;
}

const Input = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className,
  icon,
}: InputProps) => {
  return (
    <div className="relative flex items-center">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border-solid border-[#D0D5DD] text-[#667085] font-light text-[16px] rounded-md p-3 ${className} w-[335px]`}
      />
      {icon && <div className="absolute right-2">{icon}</div>}
    </div>
  );
};

export default Input;
