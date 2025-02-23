"use client";

import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: initial;
  margin-top: 4rem;
  padding: 1.1rem 2.7rem;
  text-align: center;
  border-radius: 0.8rem;
  border: 1px solid var(--purple);
  width: 100%;
  color: var(--purple);
  font-family: var(--instrument-sans-semi-bold);
  font-size: 1.6rem;
  line-height: 150%;
  cursor: pointer;
  &:hover {
    background-color: var(--light-purple);
  }
`;
