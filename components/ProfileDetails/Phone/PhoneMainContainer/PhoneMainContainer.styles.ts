"use client";

import Image from "next/image";
import styled from "styled-components";

export const StyledPhoneMainContainer = styled.section`
  border: 1px solid green;
  background-color: var(--white);
  max-width: 56rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.4rem;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const StyledPhoneOuterBorder = styled.div`
  border: 1px solid var(--grey);
  border-radius: 5rem;
  max-width: 30.7rem;
  width: 100%;
  height: 63.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const StyledPhoneInnerBorderImage = styled(Image)`
  position: absolute;
  top: 10px;
  left: 11px;
`;

// export const StyledPhoneInnerBorder = styled.div`
//   border: 1px solid var(--grey);
//   border-radius: 4.5rem;
//   max-width: 28.5rem;
//   width: 100%;
//   height: 61.1rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

export const StyledPhoneInnerDetailsContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 23.7rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5.6rem;
  border: 1px solid red;
`;
