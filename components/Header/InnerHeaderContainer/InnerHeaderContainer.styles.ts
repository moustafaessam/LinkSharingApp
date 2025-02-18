"use client";

import styled from "styled-components";

export const StyledInnerContainer = styled.div`
  padding: 1.6rem;
  padding-left: 2.4rem;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1.2rem;
  @media (max-width: 640px) {
    border-radius: 0;
  }
`;
