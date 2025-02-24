"use client";

import styled from "styled-components";

export const StyledHeaderHalfPurpleBackground = styled.div`
  background-color: var(--purple);
  height: 35.7rem;
  border-radius: 0 0 3.2rem 3.2rem;
  @media (max-width: 640px) {
    background-color: inherit;
    height: fit-content;
  }
`;
