"use client";

import React from "react";
import {
  StyledClickImg,
  StyledContainer,
  StyledEmptyEmail,
  StyledEmptyName,
  StyledIconImg,
  StyledImg,
  StyledLinkItem,
  StyledLinksContainer,
  StyledNonEmptyEmail,
  StyledNonEmptyImg,
  StyledNonEmptyName,
  StyledPlatform,
  StyledWrapImg,
} from "./UserPreview.styles";
import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/utils/supabase/client";
import { fetchUserLinks } from "@/components/ProfileDetails/Phone/Phone Links/PhoneLinksContainer/PhoneLinksContainer";

const PLATFORM_COLORS: Record<string, string> = {
  codepen: "#000000",
  codewars: "#AD2C27",
  devto: "#0A0A0A",
  facebook: "#1877F2",
  freecodecamp: "#006400",
  frontendmentor: "#3F54A3",
  github: "#24292E",
  gitlab: "#FC6D26",
  hashnode: "#2962FF",
  linkedin: "#0077B5",
  youtube: "#EE3939",
};

export default function UserPreview() {
  const supabase = createClient();

  const { data } = useQuery({
    queryKey: ["fetching profile details"],
    queryFn: async function fetchProfileDetails() {
      const { data } = await supabase.from("users").select("*");
      return data;
    },
    staleTime: 0,
  });

  const name = data?.[0]?.name;
  const email = data?.[0]?.email;

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

  const { data: links = [] } = useQuery({
    queryKey: ["userLinks"],
    queryFn: fetchUserLinks,
  });

  console.log(links);

  return (
    <StyledContainer>
      {latestImage ? (
        <StyledNonEmptyImg src={latestImage} alt="userImg" />
      ) : (
        <StyledImg />
      )}
      {name ? (
        <StyledNonEmptyName>{name}</StyledNonEmptyName>
      ) : (
        <StyledEmptyName />
      )}
      {email ? (
        <StyledNonEmptyEmail>{email}</StyledNonEmptyEmail>
      ) : (
        <StyledEmptyEmail />
      )}
      <StyledLinksContainer>
        {links.map((element) => {
          return (
            <StyledLinkItem
              key={element.platform}
              style={{
                backgroundColor: `${PLATFORM_COLORS[element.platform]}`,
              }}
              onClick={() => window.open(element.url, "_blank")}
            >
              <StyledIconImg
                src={`/images/icon-${element.platform}.svg`}
                alt={element.platform}
              />
              <StyledPlatform>{element.platform}</StyledPlatform>
              <StyledWrapImg>
                <StyledClickImg
                  src="/images/icon-arrow-right.svg"
                  alt="visit link"
                />
              </StyledWrapImg>
            </StyledLinkItem>
          );
        })}
      </StyledLinksContainer>
    </StyledContainer>
  );
}
