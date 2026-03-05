"use client";

import { Container } from "@/shared/ui";
import { PartnersList } from "./partners-list/PartnersList";
import { PARTNERS_ITEMS } from "@/constants/partners/partners-items";

export const Partners = () => {
  return (
    <section className="pb-section-padding-bottom">
      <Container>
        <h2 className="mb-[clamp(30px,4vw,60px)] text-center text-[clamp(28px,4vw,40px)] font-bold text-primary-color">Партнеры</h2>

        <PartnersList items={PARTNERS_ITEMS} />
      </Container>
    </section>
  );
}