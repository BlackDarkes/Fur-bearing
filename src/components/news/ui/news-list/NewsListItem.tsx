import { INewsItems } from "@/constants/news/news-items";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface INewsListItemProps {
  item: INewsItems;
}

export const NewsListItem = ({ item }: INewsListItemProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[clamp(200px,20vw,300px)] rounded-lg shadow-block-shadow"
    >
      <Image
        src={item.img}
        alt={item.text}
        width={item.img.width}
        height={item.img.height}
        className="w-full h-full object-cover bg-center rounded-lg "
      />

      <div
        className={cn(
          `absolute inset-0 flex justify-center items-center w-full h-full bg-opacity-bg rounded-lg transition duration-300`,
          isHovered
            ? "opacity-100"
            : "opacity-0 select-none pointer-events-none",
        )}
      >
        <div className="flex flex-col items-center mx-10 w-full h-[80%] text-primary-bg font-medium text-center text-[clamp(16px,4vw,20px)] overflow-y-auto scrollbar-hide max-sm:mx-5">
          <span>{item.text}</span>
          <Link
            href={item.link}
            className="mt-5 text-bold text-card-bg underline uppercase"
          >
            Ссылка
          </Link>
        </div>
      </div>
    </li>
  );
};
