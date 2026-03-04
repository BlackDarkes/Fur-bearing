import ImageLogo from "@/assets/logo.png";
import Image from "next/image";
import { cn } from "../../lib/utils";

export const Logo = () => {
  return (
    <div className={cn("flex items-center gap-x-3.75 text-accent-color text-[clamp(24px,2.5vw,28px)] font-bold font-oswald select-none")}>
      <Image src={ImageLogo} alt="logo" />
      <a href="#" >Александр Пушной</a>
    </div>
  );
};
