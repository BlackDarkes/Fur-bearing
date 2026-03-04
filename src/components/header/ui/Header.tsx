"use client";

import { Container, Logo } from "@/shared/ui";
import { NavList } from "./nav/NavList";
import { HEADER_NAV_ITEMS } from "@/constants/header-nav-items";

export const Header = () => {
  return (
    <header className="bg-header-bg py-10">
      <Container className="flex justify-between items-center gap-x-10">
        <Logo />

        <NavList items={HEADER_NAV_ITEMS} />
      </Container>
    </header>
  );
}