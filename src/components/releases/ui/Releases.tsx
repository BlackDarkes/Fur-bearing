"use client"

import { Container } from "@/shared/ui";
import { ReliesesList } from "./releases-list/ReliesesList";
import { RELEASES_ITEMS } from "@/constants/releases/release-items";

export const Releases = () => {
  return (
    <section id="releases" className="pb-section-padding-bottom scroll-mt-50">
      <Container>
        <h2 className="mb-[clamp(30px,4vw,60px)] text-center text-[clamp(28px,4vw,40px)] font-bold text-primary-color">Последние релизы</h2>

        <ReliesesList items={RELEASES_ITEMS} />
      </Container>
    </section>
  );
}