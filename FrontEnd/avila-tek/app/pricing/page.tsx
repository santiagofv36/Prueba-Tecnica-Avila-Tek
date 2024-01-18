"use client";
import Button from "@/components/inputs/button";
import Image, { StaticImageData } from "next/image";
import women1 from "@/assets/women1.png";
import women2 from "@/assets/women2.png";
import women3 from "@/assets/women3.png";
import giveUs from "@/assets/give-us.png";
import men from "@/assets/men.png";
import { Photo } from "@/utils/types";

// Lista de fotos para el apartado de Pricing
const Photos: Photo[] = [
  {
    src: women1,
    alt: "women 1",
  },
  {
    src: women2,
    alt: "women 2",
  },
  {
    src: women3,
    alt: "women 3",
  },
  {
    src: giveUs,
    alt: "Give us",
  },
  {
    src: men,
    alt: "men",
  },
];

export default function Page() {
  // Pricing section

  return (
    <section className="flex flex-col justify-between items-center gap-5 p-20 md:flex-row bg-[#F9FAFB]my-16">
      {/* Parte de la izquierda del contenedor (parte de arriba en mobile) */}
      <div className="flex flex-col gap-5 w-full">
        <h1 className="text-[#101828] text-3xl">
          No long-term contracts. No catches.
        </h1>
        <p className="text-btn-tertiary font-thin">
          Start your 30-day free trial today.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row md:w-11/12 lg:justify-end md:flex-row-reverse">
          <Button
            onClick={() => {}}
            secondary
            text="Get Started"
            className="w-full p-3 text-sm xl:w-1/4"
          />
          <Button
            onClick={() => {}}
            text="Learn More"
            className="w-full p-3 bg-white text-[#344054] text-sm xl:w-1/4 border-2 border-[#D0D5DD]"
          />
        </div>
      </div>
      {/* Photos of the section */}
      <div className="flex flex-col w-full">
        {/* Para dispositivos de 1024px hacia adelante esta distribución no se verá */}
        <div className="flex flex-col gap-4 relative lg:hidden">
          {Photos.map((photo, i) => (
            <div key={i} className="max-h-[200px] overflow-hidden">
              <Image src={photo.src} alt={photo.alt} className="w-full" />
            </div>
          ))}
        </div>
        {/* Aqui no se itera ya que no hay una forma generica de posicionar los elementos */}
        <div className="hidden lg:flex lg:flex-col gap-5">
          {/* Fotos de arriba */}
          <div className="flex gap-5 items-end justify-center">
            <div className="flex flex-col">
              <Image
                src={women1}
                alt="women 1"
                width={women1.width / 2}
                height={women1.height / 2}
              />
            </div>
            <div className="flex flex-col">
              <Image
                src={women2}
                alt="women 2"
                width={women2.width / 2}
                height={women2.height / 2}
              />
            </div>
          </div>
          {/* Fotos de abajo */}
          <div className="flex gap-5 items-start justify-center">
            <div className="flex flex-col">
              <Image
                src={women3}
                alt="women 3"
                width={women3.width / 2}
                height={women3.height / 2}
              />
            </div>
            <div className="flex flex-col">
              <Image
                src={men}
                alt="men"
                width={men.width / 2}
                height={men.height / 2}
              />
            </div>
            <div className="flex flex-col">
              <Image
                src={giveUs}
                alt="women"
                width={giveUs.width / 4.0625}
                height={giveUs.height / 4.0625}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
