"use client";

import styled from "styled-components";

export const StyledImageUplaoderContainer = styled.div`
  background-color: var(--light-grey);
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 2.4rem;
  align-items: center;
  border-radius: 1.2rem;
  gap: 1.6rem;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StyledTitle = styled.p`
  font-family: var(--instrument-sans-regular);
  line-height: 150%;
  font-size: 1.6rem;
  color: var(--grey);
  @media (max-width: 640px) {
    margin-right: 0;
    margin-bottom: 1.6rem;
    max-width: 100%;
    width: auto;
  }
`;

export const StyledImageDetailsInfo = styled.p`
  font-family: var(--instrument-sans-regular);
  font-size: 1.2rem;
  line-height: 150%;
  color: var(--grey);
  /* flex-grow: 1; */
  display: flex;
  justify-content: flex-end;
`;
