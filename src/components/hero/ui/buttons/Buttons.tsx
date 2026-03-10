import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { useHeroStore } from "../../model/hero-store";

export const Buttons = () => {
  const { scrollPreview, scrollNext } = useHeroStore();

  return (
    <div className="flex gap-x-10 mx-auto mt-[clamp(10px,4vw,40px)] w-fit">
      <Button icon={ArrowLeft} onClick={scrollPreview} />
      <Button icon={ArrowRight} onClick={scrollNext} />
    </div>
  );
}