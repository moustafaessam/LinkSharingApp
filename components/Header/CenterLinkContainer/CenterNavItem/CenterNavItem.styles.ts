"use client";

import Link from "next/link";
import styled from "styled-components";

type StyledNavItemContainer = {
  isactive: string;
};

export const StyledNavItemContainer = styled(Link)<StyledNavItemContainer>`
  padding: 1.1rem 2.7rem;
  gap: 0.8rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 0.8rem;
  text-decoration: none;
  background-color: ${(props) =>
    props.isactive === "true" ? "var(--light-purple)" : "transparent"};
  color: ${(props) =>
    props.isactive === "true" ? "var(--purple)" : "var(--grey)"};
  appearance: none;
  @media (max-width: 640px) {
    justify-content: center;
  }
  &:hover svg path {
    fill: var(--purple);
  }
  &:hover p {
    color: var(--purple);
  }
`;

export const StyledNavItemText = styled.p`
  color: inherit;
  font-family: var(--instrument-sans-semi-bold);
  line-height: 150%;
  font-size: 1.6rem;
  @media (max-width: 640px) {
    display: none;
  }
`;
