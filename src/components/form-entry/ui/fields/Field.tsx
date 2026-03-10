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
      autoComplete="off"
      placeholder="ФИО"
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      className={cn(
        `w-full py-2.5 px-4 bg-transparent text-white placeholder:text-placeholder-color outline-none border border-transparent border-b-placeholder-color transition-all ease-in duration-300
        hover:border-primary-color placeholder:transition-all placeholder:duration-300 hover:placeholder:text-primary-color hover:rounded-lg`,
        isFocus
          ? "border-b-accent-color border-placeholder-color rounded-lg"
          : "",
      )}
    />
  );
};
