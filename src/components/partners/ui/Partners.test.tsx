import { screen, render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import { Partners } from "./Partners";

describe("Компонент Partners", () => {
  it("Отображение компонента Partners со всеми его элементами", () => {
    render(<Partners />);
    
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});