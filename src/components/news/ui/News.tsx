"use client";

import { Container } from "@/shared/ui";
import { NewsList } from "./news-list/NewsList";
import { NEWS_ITEMS } from "@/constants/news/news-items";

export const News = () => {
  return (
    <section id="news" className="pb-section-padding-bottom scroll-mt-50">
      <Container>
        <h2 className="mb-[clamp(30px,4vw,60px)] text-center text-[clamp(28px,4vw,40px)] font-bold text-primary-color">Новости</h2>

        <NewsList items={NEWS_ITEMS} />
      </Container>
    </section>
  );
}