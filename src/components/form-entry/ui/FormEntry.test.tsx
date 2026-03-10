import { screen, render } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
import { FormEntry } from "./FormEntry";

vi.mock("@/components/toast", () => ({
  useToastStore: () => ({
    handleOpen: vi.fn(),
    setMessage: vi.fn(),
  }),
}));

describe("Компонент FormEntry", () => {
  it("Отображение компонента FormEntry со всеми его элементами", () => {
    render(<FormEntry />);

    const formElement = screen.getByRole("form");
    expect(formElement).toBeInTheDocument();
    
    expect(screen.getByText(/Заказать билет/i)).toBeInTheDocument();
  });
});
