"use client";

import { useRouter } from "next/navigation";
import Logo from "./svg/logo";
import Button from "./inputs/button";

const links: Record<string,string>[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Products",
    href: "/products",
  },
  {
    text: "Resources",
    href: "/resources",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

const Header = () => {
  const router = useRouter();

  return (
    <nav className="flex gap-3 items-center justify-between">
      <div className="flex flex-start gap-5">
        <Logo />
        <ul className="flex gap-3 mt-1 justify-start">
          {links.map((link,i) => (
            <li
              key={i}
              className="cursor-pointer text-btn-tertiary"
              onClick={() => router.push(link.href)}
            >
              {link.text}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Button text="Log in" onClick={() => {}} />
        <Button text="Sign Up" secondary onClick={() => {}} />
      </div>
    </nav>
  );
};

export default Header;
