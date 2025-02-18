import { render, screen } from "@testing-library/react";
import Page from "./page";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

// jest.mock("../../../db/supabase.ts", () => ({
//   supabase: {
//     auth: {
//       signInWithPassword: jest.fn(),
//     },
//   },
// }));

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("Login Page", () => {
  test("renders header, subheader, inputs, button, and footer correctly", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Page />
      </QueryClientProvider>
    );
    // Check that the header (as a heading element) is rendered.
    const headerElement = await screen.findByRole("heading", {
      name: /login/i,
    });
    expect(headerElement).toBeInTheDocument();
  });
  test("renders header, subheader, inputs, button, and footer correctly", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Page />
      </QueryClientProvider>
    );
    // Check that the header (as a heading element) is rendered.
    const headerElement = screen.getByRole("heading", { name: /login/i });
    expect(headerElement).toBeInTheDocument();
    expect(
      screen.getByText(/add your details below to get back into the app/i)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/e\.g\. alex@email\.com/i)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/enter your password/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
    expect(screen.getByText(/don't have an account\?/i)).toBeInTheDocument();
    expect(screen.getByText(/create account/i)).toBeInTheDocument();
  });
  test("displays error message for email when empty after submission", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Page />
      </QueryClientProvider>
    );
    const loginButton = screen.getByRole("button", { name: /login/i });
    // Simulate a click (i.e. form submission)
    await userEvent.click(loginButton);
    // Wait for the error message to appear (it should match the validation message)
    const emailError = await screen.findByText(/can't be empty/i);
    expect(emailError).toBeInTheDocument();
  });
  test("displays error message for password when empty after submission", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Page />
      </QueryClientProvider>
    );
    // Find the login button by its role and text
    const loginButton = screen.getByRole("button", { name: /login/i });
    // Simulate a click (i.e. form submission)
    await userEvent.click(loginButton);
    // Wait for the error message to appear (it should match the validation message)
    const passwordError = await screen.findByText(/please check again/i);
    expect(passwordError).toBeInTheDocument();
  });
  test("displays error message when password is shorter than 8 characters", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Page />
      </QueryClientProvider>
    );
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
    render(
      <QueryClientProvider client={queryClient}>
        <Page />
      </QueryClientProvider>
    );
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
