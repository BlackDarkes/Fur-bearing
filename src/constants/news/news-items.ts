import { StaticImageData } from "next/image";
import ImageNews1 from "@/assets/news/images/news1.png";
import ImageNews2 from "@/assets/news/images/news2.png";
import ImageNews3 from "@/assets/news/images/news3.png";
import ImageNews4 from "@/assets/news/images/news4.png";
import ImageNews5 from "@/assets/news/images/news5.png";
import ImageNews6 from "@/assets/news/images/news6.png";
import ImageNews7 from "@/assets/news/images/news7.png";
import ImageNews8 from "@/assets/news/images/news8.png";
import ImageNews9 from "@/assets/news/images/news9.png";

interface INewsItems {
  id: number;
  text: string;
  img: StaticImageData;
  link: string;
}

const NEWS_ITEMS: INewsItems[] = [
  {
    id: 1,
    text: "Просыпаемся ото сна… и идём на концерты! Афиша и билеты: vk.cc/cvxlE4",
    img: ImageNews1,
    link: "https://vk.cc/cvxlE4",
  },
  {
    id: 2,
    text: "Всем привет! Всем Рок Жив! В этом выпуске знакомимся с легендарной группой СЕКТОР ГАЗА. Вы узнаете, почему Юрий Хой выбрал псевдоним Хой и почему назвал группу Сектор Газа. Как появился коллектив? Какие отсылки есть в треках группы: фольклор и частушки, религия, литературная классика или тяжелый рок? Что творилось на концертах бэнда? Кто был кумиром Хоя? Что связывает Сектор Газа с группами Король и Шут и Ленинград и Владимиром Высоцким? Правда ли, что Сектор Газа выпустили кавера на треки Nirvana и Red Hot Chili Peppers? Еще обсудим альбомы Ночь перед Рождеством, Панк-оперу Кащей Бессмертный, Газовая атака, Наркологический университет миллионов. А в конце выпуска вас ждет подарок, и конечно, музыка. Смотрим выпуск, пишем комменты! (2 марта)",
    img: ImageNews2,
    link: "https://vk.ru/wall-5225_194840",
  },
  {
    id: 3,
    text: "Девчонки! С праздником!!! Ваша ЛЮБИМАЯ ПЕСНЯ!!! (7 марта)",
    img: ImageNews3,
    link: "https://vk.ru/wall-5225_195039",
  },
  {
    id: 4,
    text: "Александр Пушной и ОТП студио. Большой концерт на корабле. Москва, 21 июня 2026 @ Теплоход «Рио-1» Билеты уже в продаже (6 марта)",
    img: ImageNews4,
    link: "https://vk.ru/wall-222600180_256",
  },
  {
    id: 5,
    text: "Те самые сны при температуре 39… (4 марта)",
    img: ImageNews5,
    link: "https://vk.ru/wall-5225_194923",
  },
  {
    id: 6,
    text: "Всем Хой! Ждите выпуск в VK Видео уже сегодня! (2 марта) Наполним эту весну яркими и громкими концертами в Москве и области!",
    img: ImageNews6,
    link: "https://vk.ru/wall-5225_194814",
  },
  {
    id: 7,
    text: "15 марта - Домодедово 19 марта - Красногорск 3 апреля - Владимир 4 апреля - Королёв 17 апреля - Москва 24 апреля - Зеленоград 26 апреля - Обнинск БИЛЕТЫ (26 февраля)",
    img: ImageNews7,
    link: "https://vk.ru/wall-5225_194688",
  },
  {
    id: 8,
    text: "С днём рождения, Антон Шохирев! (24 февраля)",
    img: ImageNews8,
    link: "https://vk.ru/wall-5225_194616",
  },
  {
    id: 9,
    text: "Друзья, срочная новость!Концерт Александра Пушного в Обнинске 22 февраля  ️ПЕРЕНОСИТСЯ ️ из-за состояния здоровья артиста.У Александра Александр Пушной диагностирован обструктивный бронхит. Желаем скорейшего выздоровления   Новая дата концерта: 26 АПРЕЛЯ (18:00)!Приобретенные билеты остаются действительными.Приносим извинения за неудобства и с нетерпением ждем встречи с вами на концерте в Обнинске 26 апреля! (20 февраля)",
    img: ImageNews9,
    link: "https://vk.ru/wall-235539073_6",
  },
];

export { type INewsItems, NEWS_ITEMS };