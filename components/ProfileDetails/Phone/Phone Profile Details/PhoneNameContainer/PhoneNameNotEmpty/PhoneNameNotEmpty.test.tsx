import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhoneNameNotEmpty from "./PhoneNameNotEmpty";

describe("Render Name in Phone Container", () => {
  test("Render Name with prop", () => {
    render(<PhoneNameNotEmpty name="Test Name" />);
    const name = screen.getByText(/test name/i);
    expect(name).toBeInTheDocument();
  });
});
