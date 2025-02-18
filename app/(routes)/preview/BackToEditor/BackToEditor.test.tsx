import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BackToEditor from "./BackToEditor";

describe("Render Preview Link", () => {
  test("Preview Text", () => {
    render(<BackToEditor />);
    const previewText = screen.getByText(/back to editor/i);
    expect(previewText).toBeInTheDocument();
  });
});
