"use client";

import { Container, Logo } from "@/shared/ui";
import { NavList } from "./nav/NavList";
import { HEADER_NAV_ITEMS } from "@/constants/header/header-nav-items";
import { BurgerButton } from "./burger/BurgerButton";
import { BurgerMenu } from "./burger/BurgerMenu";
import { useBurgerStore } from "../model/burger-store";

export const Header = () => {
  const { isOpen, handleOpen } = useBurgerStore();

  return (
    <header className="fixed top-0 left-0 w-screen bg-header-bg py-[clamp(25px,4vw,40px)] shadow-header-shadow z-300">
      <Container className="flex justify-between items-center gap-x-10">
        <Logo />

        <NavList items={HEADER_NAV_ITEMS} />

        <div className="lg:hidden">
          <BurgerButton isOpen={isOpen} handleOpen={handleOpen} />
          <BurgerMenu
            items={HEADER_NAV_ITEMS}
            isOpen={isOpen}
            handleOpen={handleOpen}
          />
        </div>
      </Container>
    </header>
  );
};
