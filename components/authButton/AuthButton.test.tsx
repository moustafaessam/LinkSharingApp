import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AuthButton from "./AuthButton";

describe("Authentication Button", () => {
  test("Authenticaton Button Renders correctly", () => {
    render(<AuthButton>Click me</AuthButton>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute("type", "submit");
  });
});
