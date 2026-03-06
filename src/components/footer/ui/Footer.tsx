import { Container, Logo } from "@/shared/ui";
import { FooterListLink } from "./footer-list/FooterListLink";
import { FOOTER_LINKS_ITEMS, FOOTER_SECURE_ITEMS } from "@/constants/footer/footer-links-items";
import { FooterSecure } from "./footer-secure/FooterSecure";

export const Footer = () => {
  return (
    <footer className="mt-footer-margin-top pt-[clamp(60px,20vw,100px)] border-t border-opacity-bg">
      <Container className="flex justify-between items-start pb-[clamp(80px,20vw,140px)] max-lg:flex-col max-lg:gap-y-[clamp(40px,4vw,60px)] max-lg:w-fit">
        <Logo />

        <div className="flex gap-x-[clamp(40px,4vw,120px)] max-md:flex-col max-md:gap-y-[clamp(60px,4vw,80px)]">
          <FooterListLink items={FOOTER_LINKS_ITEMS} />
          <FooterListLink items={FOOTER_SECURE_ITEMS} />
        </div>
      </Container>
      
      <FooterSecure />
    </footer>
  );
}