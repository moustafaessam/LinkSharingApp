import { render, screen } from "@testing-library/react";
import Page from "./page";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("CreateAccountPage", () => {
  test("renders header and subheader correctly", () => {
    render(<Page />);
    // Check for the main header "create account"
    expect(screen.getByText(/create account/i)).toBeInTheDocument();
    // Check for the subheader text
    expect(
      screen.getByText(/let’s get you started sharing your links!/i)
    ).toBeInTheDocument();
  });

  test("renders all AuthInput fields with placeholders", () => {
    render(<Page />);
    // Check for the Email Address input placeholder
    expect(
      screen.getByPlaceholderText(/e\.g\. alex@email\.com/i)
    ).toBeInTheDocument();
    // Check for the Create password input placeholder
    expect(
      screen.getByPlaceholderText(/enter your password/i)
    ).toBeInTheDocument();
    // Check for the Confirm password input placeholder
    expect(
      screen.getByPlaceholderText(/at least 8 characters/i)
    ).toBeInTheDocument();
  });

  test("renders password info text", () => {
    render(<Page />);
    expect(
      screen.getByText(/password must contain at least 8 characters/i)
    ).toBeInTheDocument();
  });

  test("renders the AuthButton with correct text", () => {
    render(<Page />);
    // Assuming the button has role "button" and the text "Create new account"
    expect(
      screen.getByRole("button", { name: /create new account/i })
    ).toBeInTheDocument();
  });

  test("renders the AuthFooter with info and link text", () => {
    render(<Page />);
    expect(screen.getByText(/already have an account\?/i)).toBeInTheDocument();
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test("shows email error when input is kept empty", async () => {
    render(<Page />);
    const loginButton = screen.getByRole("button", {
      name: /create new account/i,
    });
    await userEvent.click(loginButton);
    const errorMessage = await screen.findByText(/can't by empty/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("shows password error when input is kept empty", async () => {
    render(<Page />);
    const loginButton = screen.getByRole("button", {
      name: /create new account/i,
    });
    await userEvent.click(loginButton);
    const errorMessage = await screen.findByText(/please check again/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("shows confirm password error when input is kept empty", async () => {
    render(<Page />);
    const loginButton = screen.getByRole("button", {
      name: /create new account/i,
    });
    await userEvent.click(loginButton);
    const errorMessage = await screen.findByText(/passwords must match/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("shows error message when password is less than 8 characters", async () => {
    render(<Page />);
    const loginButton = screen.getByRole("button", {
      name: /create new account/i,
    });
    const passwordInput = screen.getByLabelText(/create password/i);
    await userEvent.type(passwordInput, "12345");
    await userEvent.click(loginButton);
    const errorMessage = screen.getByText(/8 characters at least/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("shows error message when password is more than 16 characters", async () => {
    render(<Page />);
    const loginButton = screen.getByRole("button", {
      name: /create new account/i,
    });
    const passwordInput = screen.getByLabelText(/create password/i);
    await userEvent.type(passwordInput, "123456789123456789");
    await userEvent.click(loginButton);
    const errorMessage = screen.getByText(/16 characters max/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays 'Passwords must match' error when confirm password doesn't match", async () => {
    render(<Page />);

    // Find the password and confirm password inputs by their placeholders.
    const passwordInput = screen.getByPlaceholderText(/enter your password/i);
    const confirmPasswordInput = screen.getByPlaceholderText(
      /at least 8 characters/i
    );

    // Type a valid password in the password input.
    await userEvent.type(passwordInput, "password123");

    // Type a different value in the confirm password input.
    await userEvent.type(confirmPasswordInput, "different123");

    // Find and click the submit button ("Create new account").
    const submitButton = screen.getByRole("button", {
      name: /create new account/i,
    });
    await userEvent.click(submitButton);

    // Wait for and assert that the error message appears.
    const errorMessage = await screen.findByText(/passwords must match/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
