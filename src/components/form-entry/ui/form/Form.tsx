import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TypeUserData, userDataSchema } from "../../model/user-data";
import { Selector } from "../fields/Selector";
import { ButtonForm } from "../button/ButtonForm";
import { EVENT_ITEMS } from "@/constants/event-items";
import { cn } from "@/shared/lib/utils";
import { useState } from "react";
import { Field } from "../fields/Field";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TypeUserData>({
    resolver: zodResolver(userDataSchema),
  });
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const onSubmit: SubmitHandler<TypeUserData> = (data: TypeUserData) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        `flex flex-col gap-y-[clamp(40px,4vw,60px)] p-[clamp(20px,4vw,40px)] mx-auto w-[min(800px,100%)] rounded-2xl shadow-form-shadow `,
      )}
    >
      <h2 className={cn(
        `text-center text-[clamp(28px,4vw,40px)] font-bold text-primary-color`
      )}>Заказать билет</h2>

      <div className="flex flex-col gap-y-[clamp(30px,4vw,50px)]">
        <div className="flex flex-col gap-y-[clamp(5px,4vw,10px)]">
          <Field  register={register("fio")} isFocus={isFocus} setIsFocus={setIsFocus}/>
          {errors.fio && <span className="text-red-500">{errors.fio.message}</span>}
        </div>

        <div className="flex flex-col gap-y-[clamp(5px,4vw,10px)]">
          <Selector options={EVENT_ITEMS} register={register("event")} />
          {errors.event && <span className="text-red-500">{errors.event.message}</span>}
        </div>
      </div>

      <ButtonForm onClick={handleSubmit(() => {})} />
    </form>
  );
};
