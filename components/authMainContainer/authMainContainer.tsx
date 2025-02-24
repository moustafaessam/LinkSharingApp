"use client";

import Image from "next/image";
import logo from "../../public/images/logo-devlinks-large.svg";
import {
  StyledAuthForm,
  StyledAuthHeader,
  StyledAuthMainContainer,
  StyledAuthMainInnerContainer,
  StyledAuthSubHeader,
  StyledErrorAuth,
  StyledHeader,
} from "./authMainContainer.styles";
import { useFormContext } from "react-hook-form";

type AuthMainContainerProps = {
  header: "login" | "create account";
  subHeader:
    | "Add your details below to get back into the app"
    | "Let’s get you started sharing your links!";
  children: React.ReactNode;
  errorMessge?: string;
};

export type AuthFormInputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function AuthMainContainer({
  header,
  subHeader,
  children,
  errorMessge,
}: AuthMainContainerProps) {
  const { handleSubmit } = useFormContext<AuthFormInputs>();

  function onSubmit(data: AuthFormInputs) {
    return data;
  }

  return (
    <StyledAuthMainContainer>
      <StyledAuthMainInnerContainer>
        <Image src={logo} alt="Logo" />

        <StyledAuthForm onSubmit={handleSubmit(onSubmit)}>
          <StyledHeader>
            <StyledAuthHeader>{header}</StyledAuthHeader>
            {/* <StyledErrorAuth>{errorMessge}</StyledErrorAuth> */}
          </StyledHeader>

          <StyledAuthSubHeader>{subHeader}</StyledAuthSubHeader>
          <StyledErrorAuth>{errorMessge}</StyledErrorAuth>

          {children}
        </StyledAuthForm>
      </StyledAuthMainInnerContainer>
    </StyledAuthMainContainer>
  );
}
