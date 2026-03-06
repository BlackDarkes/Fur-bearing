import { IReleaseItems } from "@/constants/releases/release-items";
import { Play, Pause } from "lucide-react";

interface IReliesesListItemProps {
  item: IReleaseItems;
}

export const ReliesesListItem = ({ item }: IReliesesListItemProps) => {
  return (
    <li className="flex justify-between items-center w-full">
      <audio src={item.music} />

      <div className="flex items-center gap-x-10">
        <button type="button">
          <Play />
        </button>

        <div className="flex flex-col w-full">
          <h3>{item.title}</h3>
          <p>Александр Пушной</p>
        </div>
      </div>

      <p>3:30</p>
    </li>
  );
};
