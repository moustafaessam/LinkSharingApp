"use client";

import styled from "styled-components";

export const StyledForm = styled.div`
  background-color: var(--light-grey);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border-radius: 1.2rem;
  margin-bottom: 7.4rem;
  @media (max-width: 1110px) {
    margin-bottom: 11.4rem;
  }
  @media (max-width: 64px) {
    margin-bottom: 0;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 0.4rem;
    align-items: flex-start;
  }
`;

export const StyledLabelTitle = styled.p`
  max-width: 24rem;
  width: 100%;
  color: var(--grey);
  font-family: var(--instrument-sans-regular);
  font-size: 1.2rem;
  line-height: 150%;
  font-size: 1.6rem;
`;

export const StyledInputContainer = styled.div`
  flex-grow: 1;
  height: 4.8rem;
  padding: 1.2rem 1.6rem;
  display: flex;
  justify-content: space-between;
  background-color: var(--white);
  font-size: 1.6rem;
  font-family: var(--instrument-sans-regular);
  border-radius: 0.8rem;
  &:has(input:focus) {
    box-shadow: 0 0 5px 0 var(--purple);
  }
  &:has(p) {
    box-shadow: none !important;
    border: 1px solid var(--red);
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  width: 19.4rem;
  color: var(--dark-grey);
  outline: none;
  border: none;
  &::placeholder {
    opacity: 50%;
  }
`;

export const StyledError = styled.p`
  flex-grow: 1;
  color: var(--red);
  display: flex;
  font-size: 1.2rem;
  justify-content: flex-end;
  align-items: center;
`;
