"use client";

import { cn } from "@/shared/lib/utils";
import { useToastStore } from "../model/useToastStore";

export const Toast = () => {
  const { isOpen, message, handleOpen } = useToastStore();

  return (
    <section className={cn(
      `fixed right-0 bottom-0 w-[clamp(300px,100vw,500px)] h-20 bg-white border border-primary-color rounded-[0_0_20px_0] shadow-toast-shadow translate-y-0 transition duration-500 ease-in z-500`,
      {"translate-y-full": isOpen},
    )}>
      <button
        type="button"
        onClick={handleOpen}
        className={cn(
          `absolute right-3.75 top-3.75 w-7.5 h-5
          before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-primary-color before:rotate-45 before:translate-y-2.5 before:transition before:ease-in before:duration-300
          after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-color after:-rotate-45 after:-translate-y-2 after:transition after:ease-in after:duration-300 
          z-500`,
        )}
      />

      <div>
        <p>{message}</p>
      </div>
    </section>
  );
};
