import AuthInput from "@/components/authInput/authInput";
import AuthMainContainer from "@/components/authMainContainer/authMainContainer";
import React from "react";
import { StyledInput } from "./login.styles";
import AuthButton from "@/components/authButton/AuthButton";
import AuthFooter from "@/components/authFooter/AuthFooter";

export default function Page() {
  return (
    <AuthMainContainer
      header="login"
      subHeader="Add your details below to get back into the app"
    >
      <AuthInput header="Email Address" img="/images/icon-email.svg">
        <StyledInput placeholder="e.g. alex@email.com" />
      </AuthInput>
      <AuthInput header="Password" img="/images/icon-password.svg">
        <StyledInput placeholder="Enter your password" />
      </AuthInput>
      <AuthButton>Login</AuthButton>
      <AuthFooter info="Don't have an account?" linkText="Create account" />
    </AuthMainContainer>
  );
}
