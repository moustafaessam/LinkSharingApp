"use client";

import Link from "next/link";
import styled from "styled-components";

export const StyledPreviewNavContainer = styled(Link)`
  text-decoration: none;
  border: 2px solid var(--purple);
  padding: 1.1rem 2.7rem;
  color: var(--purple);
  font-family: var(--instrument-sans-semi-bold);
  font-size: 1.6rem;
  border-radius: 0.8rem;
  &:hover {
    background-color: var(--light-purple);
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

export const StyledPreviewImageContainer = styled(Link)`
  display: none;
  @media (max-width: 640px) {
    display: block;
    padding: 1.1rem 1.6rem;
    text-decoration: none;
    border-radius: 0.8rem;
    border: 2px solid var(--purple);
  }
`;
