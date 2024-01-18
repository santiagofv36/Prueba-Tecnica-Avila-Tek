import Image, { StaticImageData } from "next/image";

interface GASCardProps {
  src: StaticImageData;
  alt: string;
  textSection: React.ReactNode; // Es un elemento HTML que contiene la informacion de la tarjeta
  reverse?: boolean; // Propiedad para indicar si la tarjeta aparece primero la imagen o no (por defecto la foto aparece de segunda)
}

const GASCard = ({ src, alt, textSection, reverse = false }: GASCardProps) => {
  return (
    <section
      className={`mt-5 bg-card-primary mx-5 rounded-xl gap-4 flex ${
        reverse ? "flex-col-reverse" : "flex-col"
      } flex-col items-center 
    ${
      reverse
        ? "sm:flex-col-reverse md:flex-row-reverse"
        : "sm:flex-col md:flex-row"
    }
    `}
    >
      {textSection}
      <div className="flex">
        <Image
          src={src}
          alt={alt}
          className={`
          ${reverse ? "rounded-t-xl" : "rounded-b-xl"} 
          ${reverse ? "md:rounded-l-xl md:rounded-tr-none" : "md:rounded-r-xl"}
          md:rounded-b-none h-80`}
        />
      </div>
    </section>
  );
};

export default GASCard;
