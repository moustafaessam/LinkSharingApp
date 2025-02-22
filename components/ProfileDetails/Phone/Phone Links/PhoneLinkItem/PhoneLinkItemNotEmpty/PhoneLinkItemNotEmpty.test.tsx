import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhoneLinkItemNotEmpty from "./PhoneLinkItemNotEmpty";

describe("Phone Not Empty Link Item", () => {
  test("render link name", () => {
    render(
      <PhoneLinkItemNotEmpty
        backgroundColor="any"
        name="testName"
        icon="/images/icon-youtube.svg"
      />
    );
    const name = screen.getByText(/testName/i);
    expect(name).toBeInTheDocument();
  });
});
