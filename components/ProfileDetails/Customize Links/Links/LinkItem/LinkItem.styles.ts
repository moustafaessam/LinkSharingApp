"use client";

import Image from "next/image";
import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 2rem;
  background-color: var(--light-grey);
  border-radius: 1.2rem;
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  justify-content: space-between;
`;

export const StyledImg = styled(Image)`
  cursor: grab;
`;

export const StyledLinkInfo = styled.p`
  font-family: var(--instrument-sans-bold);
  font-size: 1.6rem;
  line-height: 150%;
  color: var(--grey);
`;

export const StyledRemove = styled.p`
  font-family: var(--instrument-sans-regular);
  font-size: 1.6rem;
  line-height: 150%;
  cursor: pointer;
`;

export const StyledLabel = styled.label`
  color: var(--dark-grey);
  font-size: 1.2rem;
  font-family: var(--instrument-sans-regular);
  line-height: 150%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  &:first-of-type {
    margin-bottom: 1.2rem;
  }
`;

export const StyledInputContainer = styled.div`
  background-color: var(--white);
  border: 1px solid var(--borders);
  border-radius: 0.8rem;
  padding: 1.2rem 1.6rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  &:has(input:focus) {
    box-shadow: 0 0 5px 0 var(--purple);
  }
  &:has(p) {
    box-shadow: none !important;
    border: 1px solid var(--red) !important;
  }
`;

export const StyledLinkImage = styled(Image)``;

export const StyledInput = styled.input`
  caret-color: var(--purple);
  font-family: var(--instrument-sans-regular);
  font-size: 1.6rem;
  line-height: 150%;
  max-width: 30rem;
  width: 100%;
  border: none;
  outline: none;
  &::placeholder {
    opacity: 50%;
  }
`;

export const StyledError = styled.p`
  color: var(--red);
  font-family: var(--instrument-sans-regular);
  font-size: 1.2rem;
  line-height: 150%;
  color: var(--red);
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`;
