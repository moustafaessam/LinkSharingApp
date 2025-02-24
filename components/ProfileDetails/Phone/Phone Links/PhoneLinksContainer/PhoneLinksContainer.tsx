"use client";

import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/utils/supabase/client";
import PhoneLinkItemEmpty from "../PhoneLinkItem/PhoneLinkItemEmpty/PhoneLinkItemEmpty";
import PhoneLinkItemNotEmpty from "../PhoneLinkItem/PhoneLinkItemNotEmpty/PhoneLinkItemNotEmpty";
import { StyledLinksContainer } from "./PhoneLinksContainer.styles";

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

export const fetchUserLinks = async () => {
  const supabase = createClient();
  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError) throw new Error(`Session error: ${sessionError.message}`);

  const userId = session?.user?.id;
  if (!userId) throw new Error("User not authenticated");

  const { data, error } = await supabase
    .from("links")
    .select("platform, url")
    .eq("user_id", userId);

  if (error) throw new Error(`Error fetching links: ${error.message}`);

  return data || [];
};

export default function PhoneLinksContainer() {
  const {
    data: links = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["userLinks"],
    queryFn: fetchUserLinks,
  });

  if (isLoading) return <p>Loading links...</p>;
  if (isError) return <p>Failed to load links.</p>;

  return (
    <StyledLinksContainer>
      {links.length > 0
        ? links.map(({ platform, url }) => (
            <PhoneLinkItemNotEmpty
              key={platform}
              backgroundColor={PLATFORM_COLORS[platform] || "#CCCCCC"}
              icon={`/images/icon-${platform}.svg`}
              name={platform}
              onClick={() => window.open(url, "_blank")}
            />
          ))
        : Array.from({ length: 5 }).map((_, index) => (
            <PhoneLinkItemEmpty key={index} />
          ))}
    </StyledLinksContainer>
  );
}
