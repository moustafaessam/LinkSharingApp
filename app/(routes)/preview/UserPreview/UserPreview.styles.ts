"use client";

import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: var(--white);
  border-radius: 2.4rem;
  padding: 4.8rem 5.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 40rem;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  margin-top: -10rem;
  @media (max-width: 640px) {
    margin-top: 6rem;
  }
`;

export const StyledImg = styled.div`
  margin-bottom: 2.5rem;
  border-radius: 50%;
  width: 10.4rem;
  height: 10.4rem;
  background-color: #eeeeee;
`;

export const StyledNonEmptyImg = styled.img`
  margin-bottom: 2.5rem;
  border-radius: 50%;
  width: 10.4rem;
  height: 10.4rem;
  border: 4px solid var(--purple);
`;

export const StyledEmptyName = styled.div`
  width: 16rem;
  height: 1.6rem;
  border-radius: 10.4rem;
  margin-bottom: 1.3rem;
  background-color: #eeeeee;
`;

export const StyledEmptyEmail = styled.div`
  width: 7.2rem;
  height: 0.8rem;
  border-radius: 10.4rem;
  margin-bottom: 5.6rem;
  background-color: #eeeeee;
`;

export const StyledNonEmptyName = styled.div`
  color: var(--dark-grey);
  font-family: var(--instrument-sans-bold);
  font-size: 3.2rem;
  line-height: 150%;
  text-transform: capitalize;
  border-radius: 10.4rem;
  margin-bottom: 1.3rem;
`;

export const StyledNonEmptyEmail = styled.div`
  color: var(--grey);
  font-family: var(--instrument-sans-regular);
  font-size: 1.6rem;
  line-height: 150%;
  border-radius: 10.4rem;
  margin-bottom: 5.6rem;
`;

export const StyledLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  cursor: pointer;
`;

export const StyledLinkItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1.6rem;
  border-radius: 0.8rem;
  width: 100%;
`;

export const StyledIconImg = styled.img`
  margin-right: 0.8rem;
  width: 1.7rem;
  height: 1.7rem;
`;

export const StyledPlatform = styled.p`
  color: var(--white);
  font-family: var(--instrument-sans-regular);
  line-height: 150%;
  font-size: 1.6rem;
  text-transform: capitalize;
`;

export const StyledWrapImg = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`;

export const StyledClickImg = styled.img`
  width: 1.7rem;
  height: 1.7rem;
`;
