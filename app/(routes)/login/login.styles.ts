"use client";

import styled from "styled-components";

export const StyledInput = styled.input`
  flex-grow: 1;
  outline: none;
  border: none;
  caret-color: var(--purple);
  font-family: var(--instrument-sans-regular);
  font-size: 1.6rem;
  line-height: 150%;
  &::placeholder {
    opacity: 50%;
  }
`;
