"use client";

import styled from "styled-components";

type StyledInputContainerProps = {
  iserror: "true" | undefined;
};

export const StyledLabel = styled.label`
  display: block;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 2.4rem;
`;

export const StyledLabelHeader = styled.p`
  color: var(--dark-grey);
  font-family: var(--instrument-sans-regular);
  line-height: 150%;
  font-size: 1.2rem;
`;

export const StyledInputContainer = styled.div<StyledInputContainerProps>`
  padding: 1.2rem 1.6rem;
  display: flex;
  gap: 1.2rem;
  border: ${(props) =>
    props.iserror ? "1px solid var(--red)" : "1px solid var(--borders)"};
  min-width: 39.6rem;
  border-radius: 0.8rem;
  align-items: center;
  &:has(input:focus) {
    border: 1px solid var(--purple);
    box-shadow: 0 0 5px 0 var(--purple);
  }
  @media (max-width: 640px) {
    min-width: auto;
  }
`;
