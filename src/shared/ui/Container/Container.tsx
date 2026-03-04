import { cn } from "@/shared/lib/utils";
import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
  className?: string;
}
  
export const Container = ({ children, className }: IContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-[min(100%-40px,1440px)]",
        className,
      )}
    >
      { children }
    </div>
  );
}