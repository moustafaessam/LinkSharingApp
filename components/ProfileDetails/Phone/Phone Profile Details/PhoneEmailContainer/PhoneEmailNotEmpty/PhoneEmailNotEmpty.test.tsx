import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import PhoneEmailNotEmpty from "./PhoneEmailNotEmpty";

describe("Render Phone Not Empty Email", () => {
  test("Render email with props", () => {
    render(<PhoneEmailNotEmpty email="email@test.com" />);
    const email = screen.getByText(/email@test.com/i);
    expect(email).toBeInTheDocument();
  });
});
