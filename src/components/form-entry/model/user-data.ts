import { EVENT_ITEMS } from "@/constants/form-entry/event-items";
import { type infer as zInfer, object, string } from "zod";

const userDataSchema = object({
  fio: string().regex(/^([А-ЯЁ][а-яё]+[\s]){2}[А-ЯЁ][а-яё]+$/, "Неверное ФИО"),
  event: string({ error: "Выберите мероприятие" }).refine(
    (val: string) => EVENT_ITEMS.some(({ name }) => name === val),
    "Неверное мероприятие",
  ),
});

type TypeUserData = zInfer<typeof userDataSchema>;

export { userDataSchema, type TypeUserData };
