import Image from "next/image";
import active from "@/assets/ActiveUsers.png";

export default function ActiveUsers() {
  return (
  <Image
    alt="Active Users"
    src={active}
    className="w-[200px] absolute -top-52 -right-20 top-"
  />
  );
}

