"use client";
import { useRouter } from "next/navigation";
import Logo from "./svg/logo";
import Button from "./inputs/button";
import { Menu } from "lucide-react";
import { useState } from "react";

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
  const [showMenu, setShowMenu] = useState(false);

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
              className="cursor-pointer text-btn-tertiary hover:border-b-purple-200 hover:border-b-2"
              onClick={() => router.push(link.href)}
            >
              {link.text}
            </li>
          ))}
        </ul>
      </div>
      {/* Boton para movil */}
      <div className="md:hidden">
        <Menu
          className="cursor-pointer"
          size={24}
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
      {/* Cuando el menu esta abierto */}
      {showMenu && (
        <div className=" absolute flex flex-col gap-3 mt-1 justify-start right-0 top-12 bg-white border-2 p-6">
          {links.map((link, i) => (
            <ul
              key={i}
              className="cursor-pointer text-btn-tertiary border-b-2 pb-1"
              onClick={() => {
                router.push(link.href);
                setShowMenu(false);
              }}
            >
              {link.text}
            </ul>
          ))}
        </div>
      )}
      {/* Apartado de los botones */}
      <div className="hidden md:flex">
        {/* Los botones de Log in y Sign Up no sirven porque no hay interfaz para ellos */}
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
