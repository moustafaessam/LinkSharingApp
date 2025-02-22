"use client";

import Image from "next/image";
import styled from "styled-components";

type StyledImageContainerProps = {
  success: string | undefined;
};

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const StyledImageContainer = styled.div<StyledImageContainerProps>`
  flex-grow: 2;
  background-color: ${(props) =>
    props.success === "error" ? "var(--light-purple)" : ""};
  height: 19.3rem;
  background-size: cover;
  background-position: center;
  max-width: 19.3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  flex-direction: column;
  border-radius: 1.2rem;
  @media (max-width: 640px) {
    margin-right: 0;
    margin-bottom: 2.4rem;
  }
`;

export const StyledImageUploaderImage = styled(Image)`
  width: 100%;
`;

export const StyledImageUploadText = styled.p`
  color: var(--purple);
  font-family: var(--instrument-sans-semi-bold);
  font-size: 1.6rem;
  line-height: 150%;
  text-align: center;
`;

export const StyledMessage = styled.p`
  font-family: var(--instrument-sans-semi-bold);
  font-size: 1.2rem;
  text-align: center;
`;
