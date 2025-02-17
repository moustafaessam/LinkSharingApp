"use client";

import styled from "styled-components";

export const StyledAuthMainContainer = styled.div`
  min-height: 100dvh;
  min-width: 100dvw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    background-color: var(--white);
    display: block;
    padding: 3.2rem;
  }
`;

export const StyledAuthMainInnerContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.1rem;
  @media (max-width: 640px) {
    gap: 6.4rem;
    align-items: flex-start;
  }
`;

export const StyledAuthForm = styled.form`
  background-color: var(--white);
  border-radius: 1.2rem;
  padding: 4rem;
  width: 100%;
  @media (max-width: 640px) {
    background-color: initial;
    padding: 0;
    border-radius: 0;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const StyledErrorAuth = styled.p`
  font-family: var(--instrument-sans-regular);
  font-size: 1.5rem;
  color: var(--red);
  &::first-letter {
    text-transform: capitalize;
  }
`;

export const StyledAuthHeader = styled.h1`
  color: var(--dark-grey);
  font-size: 3.2rem;
  font-family: var(--instrument-sans-semi-bold);
  line-height: 100%;
  text-transform: capitalize;
  margin-bottom: 0.8rem;
  @media (max-width: 640px) {
    font-size: 2.4rem;
  }
`;

export const StyledAuthSubHeader = styled.p`
  color: var(--grey);
  font-family: var(--instrument-sans-regular);
  font-size: 1.6rem;
  line-height: 150%;
  margin-bottom: 4rem;
`;
