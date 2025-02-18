import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PreviewNav from "./PreviewNav";

describe("Render Preview Link", () => {
  test("Preview Text", () => {
    render(<PreviewNav />);
    const previewText = screen.getByText(/preview/i);
    expect(previewText).toBeInTheDocument();
  });
});
