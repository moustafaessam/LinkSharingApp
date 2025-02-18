import React from "react";
import { StyledMainHeaderContainer } from "./MainHeaderContainer.styles";

type MainHeaderContainerProps = {
  children: React.ReactNode;
};

export default function MainHeaderContainer({
  children,
}: MainHeaderContainerProps) {
  return <StyledMainHeaderContainer>{children}</StyledMainHeaderContainer>;
}
