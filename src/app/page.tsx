import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FormEntry } from "@/components/form-entry";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FormEntry />
      </main>
    </>
  );
}
