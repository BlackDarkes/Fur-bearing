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
      className="relative w-fit rounded-lg shadow-block-shadow"
    >
      <Image
        src={item.img}
        alt={item.text}
        width={item.img.width}
        height={item.img.height}
      />

      <div
        className={cn(
          `absolute inset-0 flex justify-center items-center bg-opacity-bg rounded-lg transition duration-300`,
          isHovered ? "opacity-100" : "opacity-0",
        )}
      >
        <Link
          href={item.link}
          className="mx-20 text-primary-bg font-medium text-center text-[clamp(16px,4vw,20px)]"
        >
          {item.text}
        </Link>
      </div>
    </li>
  );
};
