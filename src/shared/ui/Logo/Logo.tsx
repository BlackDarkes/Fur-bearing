import ImageLogo from "@/assets/logo.png";
import Image from "next/image";
import { cn } from "../../lib/utils";

export const Logo = () => {
  return (
    <div className={cn("flex items-center gap-x-[clamp(6px,1.5vw,15px)] text-accent-color text-[clamp(18px,2.5vw,28px)] font-bold font-oswald select-none")}>
      <Image src={ImageLogo} alt="logo" width={60} height={60} className="w-[clamp(45px,10vw,60px)]" />
      <a href="#" >Александр Пушной</a>
    </div>
  );
};
