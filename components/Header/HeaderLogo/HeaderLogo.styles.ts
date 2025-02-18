"use client";

import Image from "next/image";
import styled from "styled-components";

export const StyledImageMobile = styled(Image)`
  display: none;

  @media (max-width: 640px) {
    display: block;
  }
`;

export const StyledImageDesktop = styled(Image)`
  display: block;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const StyledImageContainer = styled.div`
  display: none;
  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    width: 5.2rem;
    height: 3.2rem;
  }
`;
