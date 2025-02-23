import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomizsLinksContainer from "./CustomizsLinksContainer";

describe("Customize Links Main Container", () => {
  test("Header Render", () => {
    render(<CustomizsLinksContainer />);
    const header = screen.getByText(/customize your links/i);
    expect(header).toBeInTheDocument();
  });
  test("Sub header render", () => {
    render(<CustomizsLinksContainer />);
    const subHeader = screen.getByText(
      "Add/edit/remove links below and then share all your profiles with the world!"
    );
    expect(subHeader).toBeInTheDocument();
  });
});
