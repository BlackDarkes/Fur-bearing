import { screen, render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import { News } from "./News";

describe("Компонент News", () => {
  it("Отображение компонента News со всеми его элементами", () => {
    render(<News />);
    
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});