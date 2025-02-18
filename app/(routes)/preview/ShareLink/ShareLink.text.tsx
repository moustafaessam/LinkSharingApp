import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShareLink from "./ShareLink";

describe("Render Preview Link", () => {
  test("Preview Text", () => {
    render(<ShareLink />);
    const previewText = screen.getByText(/share link/i);
    expect(previewText).toBeInTheDocument();
  });
});
