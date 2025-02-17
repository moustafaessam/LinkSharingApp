import { render, screen } from "@testing-library/react";
import Page from "./page";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

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
  test("displays error message for email when empty after submission", async () => {
    render(<Page />);

    // Find the login button by its role and text
    const loginButton = screen.getByRole("button", { name: /login/i });

    // Simulate a click (i.e. form submission)
    await userEvent.click(loginButton);

    // Wait for the error message to appear (it should match the validation message)
    const emailError = await screen.findByText(/can't by empty/i);
    expect(emailError).toBeInTheDocument();
  });
  test("displays error message for password when empty after submission", async () => {
    render(<Page />);

    // Find the login button by its role and text
    const loginButton = screen.getByRole("button", { name: /login/i });

    // Simulate a click (i.e. form submission)
    await userEvent.click(loginButton);

    // Wait for the error message to appear (it should match the validation message)
    const passwordError = await screen.findByText(/please check again/i);
    expect(passwordError).toBeInTheDocument();
  });
  test("displays error message when password is shorter than 8 characters", async () => {
    render(<Page />);

    // Find the password input by its placeholder text.
    const passwordInput = screen.getByPlaceholderText(/enter your password/i);

    // Type a password that is too short (e.g., "12345").
    await userEvent.type(passwordInput, "12345");

    // Find and click the login button to trigger form submission.
    const loginButton = screen.getByRole("button", { name: /login/i });
    await userEvent.click(loginButton);

    // Wait for the error message to appear.
    const errorMessage = await screen.findByText(/8 characters at least/i);
    expect(errorMessage).toBeInTheDocument();
  });
  test("displays error message when password is longer than 16 characters", async () => {
    render(<Page />);

    // Find the password input by its placeholder text.
    const passwordInput = screen.getByPlaceholderText(/enter your password/i);

    // Type a password that is too short (e.g., "12345").
    await userEvent.type(passwordInput, "123456789123456789");

    // Find and click the login button to trigger form submission.
    const loginButton = screen.getByRole("button", { name: /login/i });
    await userEvent.click(loginButton);

    // Wait for the error message to appear.
    const errorMessage = await screen.findByText(/16 characters max/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
