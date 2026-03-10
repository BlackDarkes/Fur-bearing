import { render, screen } from "@testing-library/react";
import { vi, it, describe, expect } from "vitest";
import { Header } from "./Header";
import { useBurgerStore } from "../model/burger-store";

vi.mock("../model/burger-store", () => ({
  useBurgerStore: vi.fn(),
}));

describe("Компонент Header", () => {
  it("Отображение компонента Header со всеми его элементами", () => {
    vi.mocked(useBurgerStore).mockReturnValue({
      isOpen: false,
      handleOpen: vi.fn(),
    });

    render(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("Отображение бургер-меню в открытом состоянии", () => {
    vi.mocked(useBurgerStore).mockReturnValue({
      isOpen: true,
      handleOpen: vi.fn(),
    });

    render(<Header />);
  });
});
