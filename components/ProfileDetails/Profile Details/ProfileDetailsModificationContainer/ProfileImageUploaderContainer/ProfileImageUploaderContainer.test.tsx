import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProfileImageUploaderContainer from "./ProfileImageUploaderContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("../../../../../utils/supabase/client.ts", () => ({
  createClient: jest.fn(),
}));

const queryClient = new QueryClient();

describe("Image Uploader", () => {
  test("Image uploader texts render", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ProfileImageUploaderContainer />
      </QueryClientProvider>
    );
    const header = screen.getByText(/profile picture/i);
    const uploadImageText = screen.getByText(/upload image/i);
    const imageDetails = screen.getByText(
      /Image must be below 1024x1024px. Use PNG or JPG format./i
    );
    expect(header).toBeInTheDocument();
    expect(uploadImageText).toBeInTheDocument();
    expect(imageDetails).toBeInTheDocument();
  });
});
