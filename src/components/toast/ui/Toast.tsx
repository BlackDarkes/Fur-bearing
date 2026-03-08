"use client";

import { cn } from "@/shared/lib/utils";
import { useToastStore } from "../model/useToastStore";

export const Toast = () => {
  const { isOpen, message, handleClose } = useToastStore();

  return (
    <section className={cn(
      `fixed right-5 bottom-5 w-[clamp(300px,100vw,500px)] h-20 bg-header-bg rounded-[8px_8px_20px_8px] shadow-block-shadow translate-y-[150%] transition duration-500 ease-in z-500`,
      {"translate-y-0": isOpen},
    )}>
      <button
        type="button"
        onClick={handleClose}
        className={cn(
          `absolute right-3.75 top-3.75 w-7.5 h-5
          before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-primary-color before:rotate-45 before:translate-y-2.5 before:transition before:duration-300
          after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-color after:-rotate-45 after:-translate-y-2 after:transition after:duration-300 
          hover:before:bg-opacity-bg hover:after:bg-opacity-bg
          z-500`,
        )}
      />

      <div className="flex items-center w-full h-full pl-[clamp(15px,4vw,25px)]">
        <p className="text-primary-color text-[clamp(16px,4vw,20px)]">{message}</p>
      </div>
    </section>
  );
};
