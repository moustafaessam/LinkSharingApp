"use client";

import styled from "styled-components";

export const StyledAuthFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: var(--instrument-sans-regular);
  gap: 0.5rem;
  font-size: 1.6rem;
  @media (max-width: 640px) {
    gap: 0;
    align-items: center;
    flex-direction: column;
  }
`;

export const StyledFooterInfo = styled.p`
  color: var(--grey);
`;

export const StyledFooterLink = styled.p`
  color: var(--purple);
  cursor: pointer;
`;
