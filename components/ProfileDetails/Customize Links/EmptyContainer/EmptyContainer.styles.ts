"use client";

import Image from "next/image";
import styled from "styled-components";

export const StyledContainer = styled.div`
  margin-top: 2.4rem;
  padding: 2rem;
  background-color: var(--light-grey);
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledImage = styled(Image)`
  margin-bottom: 4rem;
  @media (max-width: 640px) {
    margin-bottom: 2.4rem;
    width: 12.5rem;
    height: 8rem;
  }
`;

export const StyledChildContainer = styled.div`
  text-align: center;
  max-width: 48.8rem;
  @media (max-width: 640px) {
    max-width: 100%;
  }
`;

export const StyledHeader = styled.h3`
  color: var(--dark-grey);
  font-family: var(--instrument-sans-bold);
  font-size: 3.2rem;
  line-height: 150%;
  margin-bottom: 2.4rem;
  @media (max-width: 640px) {
    font-size: 2.4rem;
  }
`;

export const StyledInfo = styled.p`
  color: var(--grey);
  font-family: var(--instrument-sans-regular);
  font-size: 1.6rem;
  line-height: 150%;
`;
