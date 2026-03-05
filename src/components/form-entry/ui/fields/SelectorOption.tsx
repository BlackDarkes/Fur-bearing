import { IEventItems } from "@/constants/form-entry/event-items";

interface ISelectorOptionProps {
  option: IEventItems;
}

export const SelectorOption = ({ option }: ISelectorOptionProps) => {
  return <option value={option.name}>{option.name}</option>;
};
