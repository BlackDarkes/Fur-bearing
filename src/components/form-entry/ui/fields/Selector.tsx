import { IEventItems } from "@/constants/form-entry/event-items";
import { SelectorOption } from "./SelectorOption";
import { cn } from "@/shared/lib/utils";
import { UseFormRegisterReturn } from "react-hook-form";

interface ISelectorProps {
  options: IEventItems[];
  register: UseFormRegisterReturn;
}

export const Selector = ({ options, register }: ISelectorProps) => {
  return (
    <select
      {...register}
      id="events"
      className={cn(
        `p-[clamp(20px,4vw,30px)_clamp(10px,4vw,20px)] bg-primary-bg border border-placeholder-color rounded-lg transition-all duration-400
        hover:border-primary-color active:border-primary-color hover:rounded-[14px]`,
      )}
      defaultValue=""
    >
      <option value="" disabled>
        Выберите мероприятие
      </option>
      {options.map((option, index) => (
        <SelectorOption key={index} option={option} />
      ))}
    </select>
  );
};
