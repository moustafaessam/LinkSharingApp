import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CenterNavItem from "./CenterNavItem";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Center Nav Item Container", () => {
  test("Link Text Render", () => {
    render(<CenterNavItem name="sometext" pathShape="any" href="someText" />);
    const navText = screen.getByText("sometext");
    expect(navText).toBeInTheDocument();
  });
});
