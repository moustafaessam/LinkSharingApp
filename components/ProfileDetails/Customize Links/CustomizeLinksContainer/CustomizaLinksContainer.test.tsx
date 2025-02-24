import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomizsLinksContainer from "./CustomizsLinksContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("../../../../utils/supabase/client.ts", () => ({
  createClient: jest.fn(),
}));

const queryClient = new QueryClient();

describe("Customize Links Main Container", () => {
  test("Header Render", () => {
    render(
      <QueryClientProvider client={queryClient}>
        {" "}
        <CustomizsLinksContainer />
      </QueryClientProvider>
    );
    const header = screen.getByText(/customize your links/i);
    expect(header).toBeInTheDocument();
  });
  test("Sub header render", () => {
    render(
      <QueryClientProvider client={queryClient}>
        {" "}
        <CustomizsLinksContainer />
      </QueryClientProvider>
    );
    const subHeader = screen.getByText(
      "Add/edit/remove links below and then share all your profiles with the world!"
    );
    expect(subHeader).toBeInTheDocument();
  });
});
