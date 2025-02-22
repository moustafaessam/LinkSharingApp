"use client";

import { StyledProfileContainer } from "./ProfileDetails.styles";
import ProfileDetailsModificationContainer from "../ProfileDetailsModificationContainer/ProfileDetailsMain/ProfileDetailsModificationContainer";
import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import ProfileDetailsSaveContainer from "../ProfileDetailsSaveContainer/ProfileDetailsSaveContainer";
import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/utils/supabase/client";
import { useEffect } from "react";

export type ProfileDetailsFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
};

export default function ProfileDetails() {
  const supabase = createClient();

  const { data } = useQuery({
    queryKey: ["fetching profile details as default values"],
    queryFn: async function fetchProfileDetails() {
      const { data } = await supabase.from("users").select("*").single();
      return data;
    },
  });

  const form = useForm<ProfileDetailsFormInputs>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const { control, handleSubmit, reset } = form;

  useEffect(() => {
    if (data) {
      const name = data.name || "";
      const [firstName, lastName] = name.split(" ");
      reset({
        firstName: firstName ?? "",
        lastName: lastName ?? "",
        email: data.email ?? "",
      });
    }
  }, [data, reset]);

  const onSubmit = (formData: ProfileDetailsFormInputs) => {
    return formData;
  };

  return (
    <FormProvider {...form}>
      <StyledProfileContainer onSubmit={handleSubmit(onSubmit)}>
        <ProfileDetailsModificationContainer />
        <ProfileDetailsSaveContainer />
        <DevTool control={control} />
      </StyledProfileContainer>
    </FormProvider>
  );
}
