import { IReleaseItems } from "@/constants/releases/release-items";
import { ReliesesListItem } from "./ReliesesListItem";

interface IReliesesListProps {
  items: IReleaseItems[];
}
  
export const ReliesesList = ({ items }: IReliesesListProps) => {
  return (
    <ul className="flex flex-col gap-y-10 mx-auto w-[min(100%,1200px)]">
      { items.map((item) => (
        <ReliesesListItem key={item.id} item={item} />
      )) }
    </ul>
  );
}