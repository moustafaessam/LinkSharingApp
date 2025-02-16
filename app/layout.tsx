import { GlobalStyles } from "@/styles/GlobalStyles";
import StyledComponentsRegistry from "@/utils/lib/registry";

type HomeLayoutProps = {
  children: React.ReactNode;
};

export default function layout({ children }: HomeLayoutProps) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
