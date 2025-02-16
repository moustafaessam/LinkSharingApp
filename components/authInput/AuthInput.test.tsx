import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AuthInput from "./authInput";

describe("AuthInput Component", () => {
  test("renders header, image, and children correctly", () => {
    const header = "Test Header";
    const imgSrc = "/images/test-image.png";
    const childText = "Child Content";

    render(
      <AuthInput header={header} img={imgSrc}>
        <p>{childText}</p>
      </AuthInput>
    );

    // Check that the header text is rendered
    const headerElement = screen.getByText(header);
    expect(headerElement).toBeInTheDocument();

    // Check that the image is rendered with the correct alt text
    const imageElement = screen.getByAltText(header);
    expect(imageElement).toBeInTheDocument();

    // Check that the children content is rendered
    const childElement = screen.getByText(childText);
    expect(childElement).toBeInTheDocument();
  });
});
