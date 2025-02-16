import { render, screen } from "@testing-library/react";
import Page from "./page";
import "@testing-library/jest-dom";

describe("Login Page", () => {
  test("renders header, subheader, inputs, button, and footer correctly", () => {
    render(<Page />);

    // Check that the header (as a heading element) is rendered.
    const headerElement = screen.getByRole("heading", { name: /login/i });
    expect(headerElement).toBeInTheDocument();

    // Check that the subheader text is rendered.
    expect(
      screen.getByText(/add your details below to get back into the app/i)
    ).toBeInTheDocument();

    // Check that the first input has the correct placeholder.
    expect(
      screen.getByPlaceholderText(/e\.g\. alex@email\.com/i)
    ).toBeInTheDocument();

    // Check that the second input has the correct placeholder.
    expect(
      screen.getByPlaceholderText(/enter your password/i)
    ).toBeInTheDocument();

    // Check that the AuthButton renders with the text "Login".
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();

    // Check that the footer info and link text are rendered.
    expect(screen.getByText(/don't have an account\?/i)).toBeInTheDocument();
    expect(screen.getByText(/create account/i)).toBeInTheDocument();
  });
});
