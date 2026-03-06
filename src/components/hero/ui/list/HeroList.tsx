import { IHeroItems } from "@/constants/hero/hero-items";
import { HeroListItem } from "./HeroListItem";
import { cn } from "@/shared/lib/utils";
import { useEffect, useRef } from "react";
import { useHeroStore } from "../../model/hero-store";

interface IHeroListProps {
  items: IHeroItems[];
}

export const HeroList = ({ items }: IHeroListProps) => {
  const containerRef = useRef<HTMLUListElement>(null);
  const setScrollElement = useHeroStore((state) => state.setScrollElement);

  useEffect(() => {
    if (containerRef.current) {
      setScrollElement(containerRef.current);
    }

    return () => setScrollElement(null);
  }, [setScrollElement]);

  return (
    <ul
      ref={containerRef}
      className={cn(
        `flex gap-x-6.5 py-5 px-[7px_20px] w-full scrollbar-hide overflow-auto snap-mandatory snap-x`,
      )}
    >
      {items.map((item) => (
        <HeroListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
