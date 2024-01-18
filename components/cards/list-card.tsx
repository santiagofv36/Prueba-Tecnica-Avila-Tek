import { ArrowRight } from "lucide-react";
import Button from "../inputs/button";

interface ListCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
}

export default function ListCard({
  title,
  description,
  icon,
  buttonText,
}: ListCardProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-3 mt-5">
      {icon}
      <h2 className="text-center text-lg text-t-primary">{title}</h2>
      <p className="text-btn-tertiary text-center lg:px-0 md:px-10 xl:px-20 2xl:px-20 sm:px-0">
        {description}
      </p>
      <span className="flex gap-5">
        <Button onClick={() => {}} text={buttonText} className="text-primary" />
        <ArrowRight className="text-primary" />
      </span>
    </div>
  );
}
