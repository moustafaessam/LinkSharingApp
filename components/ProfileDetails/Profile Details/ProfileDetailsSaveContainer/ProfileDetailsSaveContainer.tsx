"use client";

import React, { useState, useEffect } from "react";
import {
  StyledButton,
  StyledSaveContainer,
  StyledSavedContainer,
} from "./ProfileDetailsSaveContainer.styles";
import Image from "next/image";
import { useFormContext } from "react-hook-form";
import { ProfileDetailsFormInputs } from "../ProfileDetailsContainer/ProfileDetails";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/utils/supabase/client";

export default function ProfileDetailsSaveContainer() {
  const queryClient = useQueryClient();
  const [saved, setSaved] = useState(false);
  const supabase = createClient();
  const {
    formState: { isValid },
    watch,
  } = useFormContext<ProfileDetailsFormInputs>();

  const watchedEmail = watch("email");
  const [watchedFirstName, watchedLastName] = watch(["firstName", "lastName"]);
  const completeName =
    watchedFirstName && watchedLastName
      ? `${watchedFirstName} ${watchedLastName}`
      : null;

  const { mutate: upsertUser, isPending } = useMutation({
    mutationFn: async ({ name, email }: { name: string; email: string }) => {
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError) throw new Error("Failed to get session.");
      if (!session?.user) throw new Error("User not authenticated.");

      const userId = session.user.id; // Get user UUID

      const { error } = await supabase
        .from("users")
        .upsert([{ user_id: userId, name, email }], { onConflict: "user_id" });

      if (error) console.log(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetching profile details"] });
      setSaved(true);
    },
    onError: (error) => console.error("Upsert error:", error),
  });

  function handleSave() {
    if (isValid && completeName && watchedEmail) {
      upsertUser({ name: completeName, email: watchedEmail });
    }
  }

  useEffect(() => {
    if (saved) {
      const timer = setTimeout(() => setSaved(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [saved]);

  return (
    <StyledSaveContainer>
      <StyledButton type="submit" onClick={handleSave} disabled={isPending}>
        {isPending ? "Saving..." : "Save"}
      </StyledButton>

      {saved && (
        <StyledSavedContainer>
          <Image
            src="/images/icon-changes-saved.svg"
            alt="change saved"
            width={20}
            height={20}
          />
          Your changes have been successfully saved!
        </StyledSavedContainer>
      )}
    </StyledSaveContainer>
  );
}
