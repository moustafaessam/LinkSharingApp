import { render, screen } from "@testing-library/react";
import HeaderLogo from "./HeaderLogo";
import "@testing-library/jest-dom";

describe("HeaderLogo", () => {
  test("renders the desktop logo by default", () => {
    render(<HeaderLogo />);
    expect(screen.getByAltText("desktop-logo")).toBeInTheDocument();
  });

  test("hides the mobile logo by default", () => {
    render(<HeaderLogo />);
    expect(screen.getByAltText("mobile-logo")).toHaveStyle("display: none");
  });
});
