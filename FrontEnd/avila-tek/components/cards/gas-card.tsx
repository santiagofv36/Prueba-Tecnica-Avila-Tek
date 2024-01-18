import Button from "../inputs/button";
import Image from "next/image";
import giveUs from "@/assets/give-us.png";

interface GASCardProps {
    src: string;
    alt: string;
}

const GASCard = ({}: GASCardProps) => {
  return (
    <section className="mt-5 bg-card-primary mx-5 rounded-xl gap-4 flex flex-col items-center sm:flex-col md:flex-row">
      <div className="flex flex-col gap-4 p-5 md:px-20 w-full">
        <h1 className="text-white text-3xl">Give us a Shot</h1>
        <p className="text-tertiary font-[100]">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row md:w-11/12 lg:justify-end md:flex-row-reverse">
          <Button
            onClick={() => {}}
            secondary
            text="Get Started"
            className="w-full p-3 text-sm xl:w-1/6"
          />
          <Button
            onClick={() => {}}
            text="Learn More"
            className="w-full p-3 bg-white text-[#344054] text-sm xl:w-1/6"
          />
        </div>
      </div>
      <div className="flex">
        <Image
          src={giveUs}
          alt="Give us a Shot"
          className="rounded-b-xl md:rounded-r-xl md:rounded-b-none object-contain"
        />
      </div>
    </section>
  );
};

export default GASCard;
