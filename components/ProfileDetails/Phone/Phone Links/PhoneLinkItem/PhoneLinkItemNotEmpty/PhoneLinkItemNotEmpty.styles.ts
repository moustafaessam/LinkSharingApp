"use client";

import Image from "next/image";
import styled from "styled-components";

type StyledLinkItemContainerProps = {
  backgroundcolor: string;
};

export const StyledLinkItemContainer = styled.div<StyledLinkItemContainerProps>`
  padding: 1.1rem 1.6rem;
  background-color: ${(props) =>
    props.backgroundcolor ? props.backgroundcolor : "#eeeeee"};
  height: 4.4rem;
  border-radius: 0.8rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
`;

export const StyledLinkItemDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const StyledLinkImage = styled(Image)`
  width: 1.6rem;
  height: 1.6rem;
`;

export const StyledLinkName = styled.p`
  font-family: var(--instrument-sans-regular);
  font-size: 1.2rem;
  line-height: 150%;
  color: var(--white);
  text-transform: capitalize;
`;
