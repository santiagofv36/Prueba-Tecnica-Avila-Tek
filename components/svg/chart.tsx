import chart from "@/assets/Chart.png";
import Image from "next/image";

export default function Chart() {
  return <Image alt="Chart" src={chart} 
    className="w-[800px]"
  />;
}
