interface BadgeProps {
  text: string;
  className?: string;
}

export default function Badge({ text, className }: BadgeProps) {
  return (
    <p
      className={`bg-[#F9F5FF] text-primary font-light text-sm rounded-3xl p-1 border-2 border-[#E9D7FE] text-center w-30 ${className}`}
    >
      {text}
    </p>
  );
}
