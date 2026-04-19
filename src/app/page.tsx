import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FormEntry } from "@/components/form-entry";
import { News } from "@/components/news";
import { Partners } from "@/components/partners";
import { Releases } from "@/components/releases";
import { Footer } from "@/components/footer";
import { Toast } from "@/components/toast";
import { Banner } from "@/components/banner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Hero />
        <FormEntry />
        <News />
        <Partners />
        <Releases />
        <Toast />
      </main>
      <Footer />
    </>
  );
}
