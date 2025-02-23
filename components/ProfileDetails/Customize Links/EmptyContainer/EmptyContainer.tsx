import React from "react";
import {
  StyledChildContainer,
  StyledContainer,
  StyledHeader,
  StyledImage,
  StyledInfo,
} from "./EmptyContainer.styles";
import image from "../../../../public/images/illustration-empty.svg";

export default function EmptyContainer() {
  return (
    <StyledContainer>
      <StyledImage src={image} alt="illustration-empty" />
      <StyledChildContainer>
        <StyledHeader>{`Let's get you started`}</StyledHeader>
        <StyledInfo>
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </StyledInfo>
      </StyledChildContainer>
    </StyledContainer>
  );
}
