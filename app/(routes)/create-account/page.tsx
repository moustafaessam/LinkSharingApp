"use client";

import AuthInput from "@/components/authInput/authInput";
import AuthMainContainer, {
  AuthFormInputs,
} from "@/components/authMainContainer/authMainContainer";
import React from "react";
import { StyledError, StyledInput } from "../login/login.styles";
import AuthButton from "@/components/authButton/AuthButton";
import { StyledPasswordInfo } from "./createAccount.styles";
import AuthFooter from "@/components/authFooter/AuthFooter";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createAccountWithSupabase } from "@/db/supabaseAuth";
import { useRouter } from "next/navigation";

export default function Page() {
  const form = useForm<AuthFormInputs>();
  const {
    register,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = form;
  const watchedPassword = watch("password");
  const router = useRouter();

  const { mutate, isError, error, isSuccess, isPending, data } = useMutation({
    mutationFn: async (data: AuthFormInputs) => {
      return await createAccountWithSupabase(data.email, data.password);
    },
    onSuccess: () => {
      router.push("/login");
    },
  });
  return (
    <FormProvider {...form}>
      <AuthMainContainer
        header="create account"
        subHeader="Let’s get you started sharing your links!"
        errorMessge={
          isPending
            ? "Wait for a second"
            : isSuccess &&
              data === "User already registered. Go to the Login page"
            ? "User already registered. Go to the Login page"
            : isSuccess
            ? "Please check your email for confirmation"
            : isError && isSubmitSuccessful
            ? `(${error.message})`
            : ""
        }
      >
        <AuthInput
          header="Email Address"
          img="/images/icon-email.svg"
          iserror={errors.email?.message ? "true" : undefined}
        >
          <StyledInput
            type="email"
            placeholder="e.g. alex@email.com"
            {...register("email", {
              required: { value: true, message: "Can't by empty" },
            })}
          />
          {errors.email?.message && (
            <StyledError>{errors.email.message}</StyledError>
          )}
        </AuthInput>
        <AuthInput
          header="Create password"
          img="/images/icon-password.svg"
          iserror={errors.password?.message ? "true" : undefined}
        >
          <StyledInput
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: { value: true, message: "Please check again" },
              minLength: { value: 8, message: "8 characters at least" },
              maxLength: { value: 16, message: "16 characters max" },
            })}
          />
          {errors.password?.message && (
            <StyledError>{errors.password.message}</StyledError>
          )}
        </AuthInput>
        <AuthInput
          header="Confirm password"
          img="/images/icon-password.svg"
          iserror={errors.confirmPassword?.message ? "true" : undefined}
        >
          <StyledInput
            type="password"
            placeholder="At least 8 characters"
            {...register("confirmPassword", {
              required: { value: true, message: "Passwords must match" },
              validate: {
                confirmPasswords: (value) => {
                  return value === watchedPassword || "Passwords must match";
                },
              },
            })}
          />
          {errors.confirmPassword?.message && (
            <StyledError>{errors.confirmPassword.message}</StyledError>
          )}
        </AuthInput>
        <StyledPasswordInfo>
          Password must contain at least 8 characters
        </StyledPasswordInfo>
        <AuthButton
          onClick={form.handleSubmit((values) => mutate(values))}
          disabled={isPending}
        >
          Create new account
        </AuthButton>

        <AuthFooter
          info="Already have an account?"
          linkText="Login"
          path="/login"
        />
      </AuthMainContainer>
    </FormProvider>
  );
}
