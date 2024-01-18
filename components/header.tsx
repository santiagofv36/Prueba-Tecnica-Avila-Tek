"use client";
import { useRouter } from "next/navigation";
import Logo from "./svg/logo";
import Button from "./inputs/button";
import { Menu } from "lucide-react";
import { RefObject, useRef, useState } from "react";
import useOutsideClick from "@/hooks/use-out-side-click";
import toast from "react-hot-toast";
import { notAvailableYet } from "./not-available-yet";

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

  const [showMenu, setShowMenu] = useState<boolean>(false);

  // Se define un ref para el dropdown del menu
  const dropdownRef = useRef<HTMLElement>(null);

  // Se usa el hook useOutsideClick para cerrar el menu cuando se hace click fuera de el
  // Esto reemplazaría el tener que colocar un botón para cerrar el menu
  useOutsideClick(dropdownRef, () => {
    setShowMenu(false);
  });


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
        // Este div es el dropdown del menu siempre y cuando el menu este abierto
        // Para pantallas de 768px en adelante el menu se oculta
        <div
          className=" absolute flex flex-col gap-3 mt-1 justify-start right-0 top-12 bg-white border-2 p-6 md:hidden"
          ref={dropdownRef as RefObject<HTMLDivElement>}
        >
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
          <Button
            text="Log in"
            onClick={notAvailableYet}
            className="px-4 py-2 text-sm border-2"
          />
          <Button
            text="Sign Up"
            secondary
            onClick={notAvailableYet}
            className="px-4 py-2 text-sm"
          />
        </div>
      )}
      {/* Apartado de los botones */}
      <div className="hidden md:flex">
        {/* Los botones de Log in y Sign Up no sirven porque no hay interfaz para ellos */}
        <Button text="Log in" onClick={notAvailableYet} className="px-4 py-2" />
        <Button
          text="Sign Up"
          secondary
          onClick={notAvailableYet}
          className="px-4 py-2"
        />
      </div>
    </nav>
  );
};

export default Header;
