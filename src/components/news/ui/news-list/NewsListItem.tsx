import { INewsItems } from "@/constants/news/news-items";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface INewsListItemProps {
  item: INewsItems;
}

export const NewsListItem = ({ item }: INewsListItemProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isOverflowed, setIsOverflowed] = useState<boolean>(false);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        const { scrollHeight, clientHeight } = contentRef.current;

        setIsOverflowed(scrollHeight > clientHeight + 5);
      }
    };

    checkOverflow();

    window.addEventListener("load", checkOverflow);
    return () => window.removeEventListener("load", checkOverflow);
  }, [item.text]);

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[clamp(200px,20vw,300px)] rounded-lg shadow-block-shadow"
    >
      <Image
        src={item.img}
        alt={item.text}
        width={1}
        height={1}
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
        <div
          ref={contentRef}
          className={cn(
            `flex flex-col items-center mx-15 w-full h-[80%] text-primary-bg font-medium text-center text-[clamp(16px,4vw,20px)] overflow-y-auto scrollbar-hide max-sm:mx-5`,
            isOverflowed ? "justify-start" : "justify-center",
          )}
        >
          <span>{item.text}</span>
          <Link
            href={item.link}
            className="mt-5 text-bold text-card-bg underline uppercase transition duration-400 hover:text-button-bg"
          >
            Ссылка
          </Link>
        </div>
      </div>
    </li>
  );
};
