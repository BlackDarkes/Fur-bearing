import { IHeroItems } from "@/constants/hero/hero-items";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface IHeroListItemProps {
  item: IHeroItems;
}

export const HeroListItem = ({ item }: IHeroListItemProps) => {
  return (
    <li className="shrink-0 bg-card-bg rounded-xl shadow-block-shadow snap-center">
      <Image src={item.img} alt={item.title} width={260} height={260} />

      <div className="p-2.5">
        <div className="flex flex-col gap-y-[clamp(20px,10vw,25px)]">
          <h3 title={item.title} className="w-60 h-20 text-[clamp(20px,4vw,28px)] font-semibold overflow-x-hidden text-nowrap text-ellipsis">
            {item.title}
          </h3>
          <span className="text-[clamp(16px,4vw,24px)] text-accent-color font-bold">
            {item.price}
          </span>
        </div>

        <Link
          href={item.link}
          className={cn(
            `block mt-5 py-2 w-full text-center text-[clamp(14px,4vw,18px)] font-bold uppercase text-primary-color bg-button-bg rounded-xl transition duration-400
            hover:opacity-80 active:opacity-80 hover:scale-101 active:scale-99`,
          )}
        >
          Купить
        </Link>
      </div>
    </li>
  );
};
