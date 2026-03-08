import { EVENT_ITEMS } from "@/constants/form-entry/event-items";
import { type infer as zInfer, object, string } from "zod";

const userDataSchema = object({
  fio: string()
    .min(1, "Поле обязательно для заполнения")
    .regex(/^([А-ЯЁ][а-яё]+\s){2}[А-ЯЁ][а-яё]+$/, "Неверное ФИО")
    .transform((val) => val.trim()),
  event: string()
    .min(1, "Выберите мероприятие")
    .refine(
      (val: string) => EVENT_ITEMS.some(({ name }) => name === val),
      "Неверное мероприятие",
    ),
});

type TypeUserData = zInfer<typeof userDataSchema>;

export { userDataSchema, type TypeUserData };


