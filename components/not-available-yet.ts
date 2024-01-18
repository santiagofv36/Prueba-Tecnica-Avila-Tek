import toast from "react-hot-toast";

// Funcion que muestra un toast con un mensaje de que la funcionalidad no esta disponible aun
export const notAvailableYet = () => {
  toast("Sorry, this feature is not available yet.", {
    icon: "⚠️",
  });
};
