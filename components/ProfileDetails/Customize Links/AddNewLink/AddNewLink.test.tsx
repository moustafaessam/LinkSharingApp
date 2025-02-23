import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddNewLink from "./AddNewLink";

describe("Add New Link Button", () => {
  test("Button Render", () => {
    render(<AddNewLink />);
    const button = screen.getByRole("button", { name: /\+ add new link/i });
    expect(button).toBeInTheDocument();
  });
});
