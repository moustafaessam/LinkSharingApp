"use client";

import React, { useEffect, useState } from "react";
import { StyledShareLinkNavContainer } from "./ShareLink.styles";
import { StyledSavedContainer } from "@/components/ProfileDetails/Profile Details/ProfileDetailsSaveContainer/ProfileDetailsSaveContainer.styles";
import Image from "next/image";

export default function ShareLink() {
  const [saved, setSaved] = useState(false);

  const handleCopyLink = () => {
    const currentUrl = window.location.href; // Get the current URL
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setSaved(true); // Show the confirmation message
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  useEffect(() => {
    if (saved) {
      const timer = setTimeout(() => setSaved(false), 2000); // Hide after 2 seconds
      return () => clearTimeout(timer);
    }
  }, [saved]);

  return (
    <StyledShareLinkNavContainer onClick={handleCopyLink}>
      Share link
      {saved && (
        <StyledSavedContainer>
          <Image
            src="/images/icon-link.svg"
            alt="link copied"
            width={20}
            height={20}
          />
          This link has been copied to your clipboard
        </StyledSavedContainer>
      )}
    </StyledShareLinkNavContainer>
  );
}
