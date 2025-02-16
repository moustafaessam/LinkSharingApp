import AuthInput from "@/components/authInput/authInput";
import AuthMainContainer from "@/components/authMainContainer/authMainContainer";
import React from "react";
import { StyledInput } from "../login/login.styles";
import AuthButton from "@/components/authButton/AuthButton";
import { StyledPasswordInfo } from "./createAccount.styles";
import AuthFooter from "@/components/authFooter/AuthFooter";

export default function page() {
  return (
    <AuthMainContainer
      header="create account"
      subHeader="Let’s get you started sharing your links!"
    >
      <AuthInput header="Email Address" img="/images/icon-email.svg">
        <StyledInput placeholder="e.g. alex@email.com" />
      </AuthInput>
      <AuthInput header="Create password" img="/images/icon-password.svg">
        <StyledInput placeholder="Enter your password" />
      </AuthInput>
      <AuthInput header="Confirm password" img="/images/icon-password.svg">
        <StyledInput placeholder="At least 8 characters" />
      </AuthInput>
      <StyledPasswordInfo>
        Password must contain at least 8 characters
      </StyledPasswordInfo>
      <AuthButton>Create new account</AuthButton>
      <AuthFooter info="Already have an account?" linkText="Login" />
    </AuthMainContainer>
  );
}
