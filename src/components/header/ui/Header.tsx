import { Container, Logo } from "@/shared/ui";

export const Header = () => {
  return (
    <header className="bg-header-bg py-10">
      <Container className="flex justify-between gap-x-10">
        <Logo />
      </Container>
    </header>
  );
}