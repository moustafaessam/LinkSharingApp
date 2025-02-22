"use client";

import styled from "styled-components";

export const StyledProfileDetailsMainContainer = styled.div`
  padding: 0 2.4rem 2.4rem 2.4rem;
  display: flex;
  gap: 2.4rem;
  @media (max-width: 1100px) {
    display: block;
  }
  @media (max-width: 640px) {
    padding: 1.6rem;
  }
`;
