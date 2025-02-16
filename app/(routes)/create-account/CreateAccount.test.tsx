import { render, screen } from "@testing-library/react";
import Page from "./page";
import "@testing-library/jest-dom";

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
});
