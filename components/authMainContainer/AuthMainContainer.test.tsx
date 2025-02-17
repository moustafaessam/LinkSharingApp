import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AuthMainContainer, { AuthFormInputs } from "./authMainContainer";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

// Wrapper component that provides the form context
const FormWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const methods = useForm<AuthFormInputs>();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

// Helper function to render with FormWrapper
const renderWithFormProvider = (ui: React.ReactElement) => {
  return render(<FormWrapper>{ui}</FormWrapper>);
};

describe("AuthMainContainer", () => {
  test("renders header, subHeader, logo image, and children", () => {
    const headerText = "login";
    const subHeaderText = "Add your details below to get back into the app";
    const childContent = "Test Child Content";

    renderWithFormProvider(
      <AuthMainContainer header={headerText} subHeader={subHeaderText}>
        <p>{childContent}</p>
      </AuthMainContainer>
    );

    // Check that the header (assumed to be a heading element) is rendered
    const headerElement = screen.getByRole("heading", { level: 1 });
    expect(headerElement).toHaveTextContent(headerText);

    // Check that the subheader text is rendered
    expect(screen.getByText(subHeaderText)).toBeInTheDocument();

    // Check that the logo image is rendered (by its alt text)
    expect(screen.getByAltText("Logo")).toBeInTheDocument();

    // Check that the child content is rendered
    expect(screen.getByText(childContent)).toBeInTheDocument();
  });
});
