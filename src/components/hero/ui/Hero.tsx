"use client";

import { Container } from "@/shared/ui";
import { Buttons } from "./buttons/Buttons";
import { HeroList } from "./list/HeroList";
import { HERO_ITEMS } from "@/constants/hero-items";

export const Hero = () => {
  return (
    <section className="pt-[clamp(20px,4vw,70px)] pb-section-padding-bottom">
      <Container>
        <HeroList items={HERO_ITEMS} />
        <Buttons />
      </Container>
    </section>
  );
}