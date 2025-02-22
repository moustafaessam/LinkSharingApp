"use client";

import styled, { keyframes } from "styled-components";

export const StyledSaveContainer = styled.div`
  padding: 2.4rem 4rem;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid var(--borders);
  @media (max-width: 640px) {
    padding: 1.6rem;
    justify-content: flex-start;
  }
`;

export const StyledButton = styled.button`
  padding: 1.1rem 2.7rem;
  font-family: var(--instrument-sans-semi-bold);
  font-size: 1.6rem;
  line-height: 150%;
  color: var(--white);
  background-color: var(--purple);
  border-radius: 0.8rem;
  width: 9.1rem;
  height: 4.8rem;
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 25%;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;

// Keyframes for fade-in and fade-out animation
const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  10% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  90% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
`;

export const StyledSavedContainer = styled.div`
  padding: 1.6rem 2.4rem;
  display: flex;
  gap: 0.8rem;
  color: var(--white);
  font-family: var(--instrument-sans-semi-bold);
  font-size: 1.6rem;
  line-height: 150%;
  border-radius: 1.2rem;
  background-color: var(--dark-grey);
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  animation: ${fadeInOut} 2s ease forwards;
`;
