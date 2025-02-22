"use client";

import { createClient } from "@/utils/supabase/client";
import PhoneEmailEmpty from "../PhoneEmailContainer/PhoneEmailEmpty/PhoneEmailEmpty";
import EmptyImage from "../PhoneImageContainer/EmptyImage/EmptyImage";
import PhoneNameEmpty from "../PhoneNameContainer/PhoneNameEmpty/PhoneNameEmpty";
import { StyledProfileDetailsContainer } from "./PhoneProfileDetailsContainer.styles";
import { useQuery } from "@tanstack/react-query";
import PhoneNameNotEmpty from "../PhoneNameContainer/PhoneNameNotEmpty/PhoneNameNotEmpty";
import PhoneEmailNotEmpty from "../PhoneEmailContainer/PhoneEmailNotEmpty/PhoneEmailNotEmpty";
import NonEmptyImage from "../PhoneImageContainer/NonEmptyImage/NonEmptyImage";

// Here were we going to fetch the phone profile details

export default function PhoneProfileDetailsContainer() {
  const supabase = createClient();
  const { data } = useQuery({
    queryKey: ["fetching profile details"],
    queryFn: async function fetchProfileDetails() {
      const { data } = await supabase.from("users").select("*");
      return data;
    },
    staleTime: 0,
  });
  const { data: latestImage } = useQuery({
    queryKey: ["latestImage"],
    queryFn: async () => {
      const { data, error } = await supabase.storage
        .from("user.images")
        .list("", {
          limit: 1,
          sortBy: { column: "created_at", order: "desc" },
        });

      if (error) throw new Error(error.message);
      if (!data?.length) return null;

      const { data: urlData } = supabase.storage
        .from("user.images")
        .getPublicUrl(data[0].name);

      return urlData.publicUrl;
    },
  });
  const name = data?.[0].name;
  const email = data?.[0].email;
  return (
    <StyledProfileDetailsContainer>
      {latestImage ? <NonEmptyImage imgSrc={latestImage} /> : <EmptyImage />}
      {name ? <PhoneNameNotEmpty name={name} /> : <PhoneNameEmpty />}

      {name ? <PhoneEmailNotEmpty email={email} /> : <PhoneEmailEmpty />}
    </StyledProfileDetailsContainer>
  );
}
