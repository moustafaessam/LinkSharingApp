import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AuthFooter from "./AuthFooter";

describe("AuthFooter Component", () => {
  test("renders the info and link text correctly", () => {
    render(
      <AuthFooter
        info="Some info text"
        linkText="Click here"
        path="/any-link"
      />
    );

    const infoElement = screen.getByText(/some info text/i);
    const linkElement = screen.getByText(/click here/i);

    expect(infoElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
