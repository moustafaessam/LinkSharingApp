"use client";

import styled from "styled-components";

export const StyledDetailsContainer = styled.div`
  width: 100%;
  padding: 4rem;

  @media (max-width: 640px) {
    padding: 2.4rem;
  }
`;

export const StyledDetailsHeader = styled.h1`
  font-family: var(--instrument-sans-bold);
  font-size: 3.2rem;
  line-height: 150%;
  color: var(--dark-grey);
  text-transform: capitalize;
  margin-bottom: 0.8rem;
  @media (max-width: 640px) {
    font-size: 2.4rem;
  }
`;

export const StyledDetailSubHeader = styled.p`
  color: var(--grey);
  font-family: var(--instrument-sans-regular);
  font-size: 1.6rem;
  line-height: 150%;
  margin-bottom: 4rem;
`;
