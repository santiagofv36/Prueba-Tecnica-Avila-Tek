import { FooterLink } from "@/utils/types";

interface FooterListProps {
  title: string;
  items: FooterLink[];
}

const FooterList = ({ title, items }: FooterListProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-t-primary text-sm">{title}</p>
      <ul className="flex flex-col gap-4">
        {items.map((product, i) => (
          <li key={i} className="text-primary text-sm">
            <div className="flex gap-1 items-center">
              {product.name}
              {product.icon && product.icon}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
