"use client";

import styled from "styled-components";

export const StyledAuthButton = styled.button`
  width: 100%;
  border: none;
  padding: 1.1rem 2.7rem;
  background-color: var(--purple);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--instrument-sans-semi-bold);
  font-size: 1.6rem;
  line-height: 150%;
  color: var(--white);
  border-radius: 0.8rem;
  cursor: pointer;
  margin-bottom: 2.4rem;
  &:hover {
    background-color: var(--purple-hover-color);
  }
`;
