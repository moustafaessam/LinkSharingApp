"use client";

import Image from "next/image";
import logo from "../../public/images/logo-devlinks-large.svg";
import {
  StyledAuthForm,
  StyledAuthHeader,
  StyledAuthMainContainer,
  StyledAuthMainInnerContainer,
  StyledAuthSubHeader,
} from "./authMainContainer.styles";
import { useFormContext } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type AuthMainContainerProps = {
  header: "login" | "create account";
  subHeader:
    | "Add your details below to get back into the app"
    | "Let’s get you started sharing your links!";
  children: React.ReactNode;
};

export type AuthFormInputs = {
  email: string;
  password: string;
  confirmPassword?: string;
};

export default function AuthMainContainer({
  header,
  subHeader,
  children,
}: AuthMainContainerProps) {
  const { handleSubmit, control } = useFormContext<AuthFormInputs>();

  function onSubmit(data: AuthFormInputs) {
    console.log(data);
  }

  return (
    <StyledAuthMainContainer>
      <StyledAuthMainInnerContainer>
        <Image src={logo} alt="Logo" />
        <StyledAuthForm onSubmit={handleSubmit(onSubmit)}>
          <StyledAuthHeader>{header}</StyledAuthHeader>
          <StyledAuthSubHeader>{subHeader}</StyledAuthSubHeader>
          {children}
          <DevTool control={control} />
        </StyledAuthForm>
      </StyledAuthMainInnerContainer>
    </StyledAuthMainContainer>
  );
}
