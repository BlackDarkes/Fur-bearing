import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FormEntry } from "@/components/form-entry";
import { News } from "@/components/news";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FormEntry />
        <News />
      </main>
    </>
  );
}
