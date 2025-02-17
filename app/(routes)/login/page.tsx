"use client";

import AuthInput from "@/components/authInput/authInput";
import AuthMainContainer, {
  AuthFormInputs,
} from "@/components/authMainContainer/authMainContainer";
import React from "react";
import { StyledInput } from "./login.styles";
import AuthButton from "@/components/authButton/AuthButton";
import AuthFooter from "@/components/authFooter/AuthFooter";
import { FormProvider, useForm } from "react-hook-form";

export default function Page() {
  const form = useForm<AuthFormInputs>();
  const { register } = form;

  return (
    <FormProvider {...form}>
      <AuthMainContainer
        header="login"
        subHeader="Add your details below to get back into the app"
      >
        <AuthInput header="Email Address" img="/images/icon-email.svg">
          <StyledInput
            placeholder="e.g. alex@email.com"
            {...register("email")}
          />
        </AuthInput>
        <AuthInput header="Password" img="/images/icon-password.svg">
          <StyledInput
            placeholder="Enter your password"
            {...register("password")}
          />
        </AuthInput>
        <AuthButton>Login</AuthButton>
        <AuthFooter info="Don't have an account?" linkText="Create account" />
      </AuthMainContainer>
    </FormProvider>
  );
}
