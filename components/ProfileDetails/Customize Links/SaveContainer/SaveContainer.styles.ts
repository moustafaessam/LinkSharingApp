"use client";

import styled from "styled-components";

export const StyledSaveContainer = styled.div`
  padding: 2.4rem 4rem;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid var(--borders);
  background-color: var(--white);
  @media (max-width: 640px) {
    padding: 1.6rem;
  }
`;

export const StyledSaveButton = styled.button`
  background-color: var(--purple);
  padding: 1.1rem 2.7rem;
  color: var(--white);
  font-family: var(--instrument-sans-semi-bold);
  line-height: 150%;
  font-size: 1.6rem;
  border-radius: 0.8rem;
  border: none;
  cursor: pointer;
  &:disabled {
    opacity: 25%;
    cursor: not-allowed;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;
