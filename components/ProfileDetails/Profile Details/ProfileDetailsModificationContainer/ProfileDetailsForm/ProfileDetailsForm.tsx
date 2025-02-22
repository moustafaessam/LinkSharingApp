import React from "react";
import {
  StyledError,
  StyledForm,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
  StyledLabelTitle,
} from "./ProfileDetailsForm.styles";
import { ProfileDetailsFormInputs } from "../../ProfileDetailsContainer/ProfileDetails";
import { useFormContext } from "react-hook-form";

export default function ProfileDetailsForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProfileDetailsFormInputs>() ?? {};

  if (!register) return null;

  return (
    <StyledForm>
      <StyledLabel htmlFor="firstName">
        <StyledLabelTitle>First name*</StyledLabelTitle>
        <StyledInputContainer>
          <StyledInput
            type="text"
            placeholder="e.g John"
            {...register("firstName", {
              required: { value: true, message: "Can't be empty" },
              maxLength: { value: 30, message: "Maximum is 30 letters" },
            })}
            id="firstName"
          />
          {errors.firstName?.message && (
            <StyledError>{errors.firstName.message}</StyledError>
          )}
        </StyledInputContainer>
      </StyledLabel>
      <StyledLabel htmlFor="lastName">
        <StyledLabelTitle>Last name*</StyledLabelTitle>
        <StyledInputContainer>
          <StyledInput
            type="text"
            placeholder="e.g. Appleseed"
            {...register("lastName", {
              required: { value: true, message: "Can't be empty" },
              maxLength: { value: 30, message: "Maximum is 30 letters" },
            })}
            id="lastName"
          />
          {errors.lastName?.message && (
            <StyledError>{errors.lastName.message}</StyledError>
          )}
        </StyledInputContainer>
      </StyledLabel>
      <StyledLabel htmlFor="email">
        <StyledLabelTitle>Email*</StyledLabelTitle>
        <StyledInputContainer>
          <StyledInput
            placeholder="e.g. email@example.com"
            {...register("email", {
              required: { value: true, message: "Can't be empty" },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
            id="email"
          />
          {errors.email?.message && (
            <StyledError>{errors.email.message}</StyledError>
          )}
        </StyledInputContainer>
      </StyledLabel>
    </StyledForm>
  );
}
