import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AuthMainContainer from "./authMainContainer";

describe("AuthMainContainer", () => {
  test("renders header, subHeader, logo image, and children", () => {
    const headerText = "login";
    const subHeaderText = "Add your details below to get back into the app";
    const childContent = "Test Child Content";

    render(
      <AuthMainContainer header={headerText} subHeader={subHeaderText}>
        <p>{childContent}</p>
      </AuthMainContainer>
    );

    const headerElement = screen.getByRole("heading", { level: 1 });
    expect(headerElement).toHaveTextContent(headerText);

    expect(screen.getByText(subHeaderText)).toBeInTheDocument();

    const logoImage = screen.getByAltText("Logo");
    expect(logoImage).toBeInTheDocument();

    expect(screen.getByText(childContent)).toBeInTheDocument();
  });
});
