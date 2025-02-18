import { StyledInnerContainer } from "./InnerHeaderContainer.styles";

type InnerHeaderContainerProps = {
  children: React.ReactNode;
};

export default function InnerHeaderContainer({
  children,
}: InnerHeaderContainerProps) {
  return <StyledInnerContainer>{children}</StyledInnerContainer>;
}
