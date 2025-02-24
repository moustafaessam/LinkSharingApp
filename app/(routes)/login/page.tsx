"use client";

import AuthInput from "@/components/authInput/authInput";
import AuthMainContainer, {
  AuthFormInputs,
} from "@/components/authMainContainer/authMainContainer";
import React from "react";
import { StyledError, StyledInput } from "./login.styles";
import AuthButton from "@/components/authButton/AuthButton";
import AuthFooter from "@/components/authFooter/AuthFooter";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signInWithSupabase } from "@/db/supabaseAuth";
import { useRouter } from "next/navigation";

export default function Page() {
  const form = useForm<AuthFormInputs>();
  const {
    register,
    formState: { errors, isSubmitSuccessful },
  } = form;
  const router = useRouter();

  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: async (data: AuthFormInputs) => {
      return await signInWithSupabase(data.email, data.password);
    },
    onSuccess: () => {
      router.push("/links");
    },
  });

  return (
    <FormProvider {...form}>
      <AuthMainContainer
        header="login"
        subHeader="Add your details below to get back into the app"
        errorMessge={
          isPending
            ? "Wait for a second"
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
              required: { value: true, message: "Can't be empty" },
            })}
          />
          {errors.email?.message && (
            <StyledError>{errors.email.message}</StyledError>
          )}
        </AuthInput>

        <AuthInput
          header="Password"
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

        <AuthButton
          onClick={form.handleSubmit((values) => mutate(values))}
          disabled={isPending}
        >
          Login
        </AuthButton>

        <AuthFooter
          info="Don't have an account?"
          linkText="Create account"
          path="/create-account"
        />
      </AuthMainContainer>
    </FormProvider>
  );
}
