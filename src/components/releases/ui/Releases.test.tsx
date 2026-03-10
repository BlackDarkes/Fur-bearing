import { screen, render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import { Releases } from "./Releases";

describe("Комопнент Releases", () => {
  it("Отображение компонента Releases со всеми его элементами", () => {
    render(<Releases />);
    
    expect(screen.getByRole("list")).toBeInTheDocument();
  })
})