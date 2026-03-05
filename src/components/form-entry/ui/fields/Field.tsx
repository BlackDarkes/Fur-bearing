import { cn } from "@/shared/lib/utils";
import { UseFormRegisterReturn } from "react-hook-form";

interface IFieldProps {
  register: UseFormRegisterReturn;
  isFocus: boolean;
  setIsFocus: (value: boolean) => void;
}

export const Field = ({ register, isFocus, setIsFocus }: IFieldProps) => {
  return (
    <input
      {...register}
      type="text"
      placeholder="ФИО"
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      className={cn(
        `w-full py-2.5 px-4 bg-transparent text-white placeholder:text-placeholder-color outline-none border border-transparent border-b-placeholder-color transition ease-in duration-300
        autofill:shadow-[inset_0_0_0px_1000px_var(--color-primary-bg)] autofill:text-fill-white
        autofill:border-transparent 
        autofill:border-b-placeholder-color`,
        isFocus
          ? "border-b-accent-color border-placeholder-color rounded-lg"
          : "",
      )}
    />
  );
};
