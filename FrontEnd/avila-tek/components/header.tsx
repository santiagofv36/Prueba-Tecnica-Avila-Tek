"use client";

import { useRouter } from "next/navigation";
import Logo from "./svg/logo";
import Button from "./inputs/button";
import { Menu } from "lucide-react";

const links: Record<string, string>[] = [
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
    <nav className="flex gap-3 items-center justify-between p-2 xl:p-0">
      {/* Apartado del logo */}
      <div className="flex flex-start gap-5">
        <Logo />
        {/* Lista de links */}
        <ul className="hidden md:flex gap-3 mt-1 justify-start ">
          {links.map((link, i) => (
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
      {/* Boton para movil */}
      <div className="md:hidden">
        <Menu size={24} 
          onClick={() => {}}
        />
      </div>
      <div className="hidden md:flex">
        <Button text="Log in" onClick={() => {}} className="px-4 py-2" />
        <Button
          text="Sign Up"
          secondary
          onClick={() => {}}
          className="px-4 py-2"
        />
      </div>
    </nav>
  );
};

export default Header;
