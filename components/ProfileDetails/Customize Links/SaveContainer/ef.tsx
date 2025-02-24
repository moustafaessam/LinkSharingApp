import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SaveContainer from "./SaveContainer";

describe("Add New Link Button", () => {
  test("Button Render", () => {
    render(<SaveContainer counter={[]} />);
    const button = screen.getByRole("button", { name: /save/i });
    expect(button).toBeInTheDocument();
  });
});
