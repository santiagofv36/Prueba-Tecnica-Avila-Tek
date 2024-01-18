import Image from "next/image";
import active from "@/assets/ActiveUsers.png";

export default function ActiveUsers() {
  return (
  <Image
    alt="Active Users"
    src={active}
    className="w-[150px] absolute bottom-2 right-0 sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px]"
  />
  );
}

