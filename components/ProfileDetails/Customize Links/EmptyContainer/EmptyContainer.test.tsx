import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmptyContainer from "./EmptyContainer";

describe("EmptyContainer", () => {
  test("renders the image with correct alt text", () => {
    render(<EmptyContainer />);
    const image = screen.getByAltText("illustration-empty");
    expect(image).toBeInTheDocument();
  });

  test("renders the header with correct text", () => {
    render(<EmptyContainer />);
    const header = screen.getByRole("heading", {
      name: "Let's get you started",
    });
    expect(header).toBeInTheDocument();
  });

  test("renders the information paragraph", () => {
    render(<EmptyContainer />);
    const infoText = screen.getByText(
      /Use the “Add new link” button to get started/i
    );
    expect(infoText).toBeInTheDocument();
  });
});
