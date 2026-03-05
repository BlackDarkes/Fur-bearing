import { INewsItems } from "@/constants/news/news-items";
import { NewsListItem } from "./NewsListItem";

interface INewsListProps {
  items: INewsItems[]
}
  
export const NewsList = ({ items }: INewsListProps) => {
  return (
    <ul className="grid grid-cols-3 justify-items-center gap-11.25 max-lg:grid-cols-2 max-sm:grid-cols-1">
      { items.map((item) => (
        <NewsListItem key={item.id} item={item} />
      )) }
    </ul>
  );
}