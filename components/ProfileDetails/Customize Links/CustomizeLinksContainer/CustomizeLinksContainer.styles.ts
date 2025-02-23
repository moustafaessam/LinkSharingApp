"use client";

import styled from "styled-components";

export const StyledCustomizeSection = styled.form`
  flex-grow: 1;
  border-radius: 1.2rem;

  @media (max-width: 1100px) {
    padding: 2.4rem;
    padding-top: 0;
  }
  @media (max-width: 640px) {
    padding: 1.6rem;
    padding-bottom: 0;
  }
`;

export const StyledCustomizeInnerContainer = styled.div`
  border-radius: 1.2rem;
  background-color: var(--white);
  padding: 4rem;
  @media (max-width: 640px) {
    padding: 2.4rem;
  }
`;

export const StyledHeader = styled.h1`
  color: var(--dark-grey);
  font-family: var(--instrument-sans-bold);
  font-size: 3.2rem;
  line-height: 150%;
  margin-bottom: 0.8rem;
  @media (max-width: 640px) {
    font-size: 2.4rem;
  }
`;

export const StyledSubHeader = styled.p`
  color: var(--grey);
  font-size: 1.6rem;
  font-family: var(--instrument-sans-regular);
  line-height: 150%;
`;
