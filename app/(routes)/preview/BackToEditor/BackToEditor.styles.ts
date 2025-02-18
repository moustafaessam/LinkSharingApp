"use client";

import Link from "next/link";
import styled from "styled-components";

export const StyledBackToEditorLinkNavContainer = styled(Link)`
  text-decoration: none;
  border: 2px solid var(--purple);
  padding: 1.1rem 2.7rem;
  color: var(--purple);
  font-family: var(--instrument-sans-semi-bold);
  font-size: 1.6rem;
  border-radius: 0.8rem;
  cursor: pointer;
`;
