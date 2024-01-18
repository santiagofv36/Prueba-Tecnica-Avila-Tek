import { useEffect, RefObject } from "react";

// Esta función se encarga de detectar si se ha hecho click fuera de un elemento
// Cualquier elemento que se comporte como un elemento HTML

const useOutsideClick = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: () => void
): void => {
  // Esta función se encarga de detectar si se ha hecho click fuera de un elemento

  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      handler();
    }
  };

  useEffect(() => {
    // Añadimos el evento de click al documento
    document.addEventListener("click", handleClick);
    return () => {
      // Eliminamos el evento de click al documento
      document.removeEventListener("click", handleClick);
    };
  }, [ref, handler]);
};

export default useOutsideClick;
