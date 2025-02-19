"use client";

import styled from "styled-components";

export const StyledProfileDetailsMainContainer = styled.div`
  border: 1px solid red;
  padding: 0 2.4rem 2.4rem 2.4rem;
  display: flex;
  gap: 2.4rem;
  @media (max-width: 1110px) {
    display: block;
  }
  @media (max-width: 640px) {
    padding: 0 1.6rem 1.6rem 1.6rem;
  }
`;
