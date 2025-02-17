import { GlobalStyles } from "@/styles/GlobalStyles";
import StyledComponentsRegistry from "@/utils/registry";
import Providers from "@/utils/Providers";

type HomeLayoutProps = {
  children: React.ReactNode;
};

export default function layout({ children }: HomeLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <StyledComponentsRegistry>
            <GlobalStyles />
            {children}
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
