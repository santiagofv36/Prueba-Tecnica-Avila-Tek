import { ArrowRight } from "lucide-react";
import Button from "../inputs/button";

interface IntegrationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function IntegrationCard({
  title,
  description,
  icon,
}: IntegrationCardProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      {icon}
      <h2 className="text-center text-lg text-t-primary">{title}</h2>
      <p className="text-btn-tertiary text-center lg:px-0 md:px-40 sm:px-0">{description}</p>
      <span className="flex gap-5">
        <Button
          onClick={() => {}}
          text="View integration"
          className="text-primary"
        />
        <ArrowRight className="text-primary" />
      </span>
    </div>
  );
}
