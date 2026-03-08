"use client";

import { IReleaseItems } from "@/constants/releases/release-items";
import { ReliesesListItem } from "./ReliesesListItem";
import { useState } from "react";

interface IReliesesListProps {
  items: IReleaseItems[];
}

export const ReliesesList = ({ items }: IReliesesListProps) => {
  const [currentPlayingId, setCurrentPlayingId] = useState<number | null>(null);

  const handlePlay = (id: number) => {
    setCurrentPlayingId((prev) => (prev === id ? null : id));
  };

  return (
    <ul className="flex flex-col gap-y-10 mx-auto w-[min(100%,1200px)]">
      {items.map((item) => (
        <ReliesesListItem
          key={item.id}
          item={item}
          isPlaying={currentPlayingId === item.id}
          onPlay={handlePlay}
        />
      ))}
    </ul>
  );
};
