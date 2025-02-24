"use client";

import Image from "next/image";
import { StyledSavedContainer } from "../../Profile Details/ProfileDetailsSaveContainer/ProfileDetailsSaveContainer.styles";
import { CounterType } from "../CustomizeLinksContainer/CustomizsLinksContainer";
import { StyledSaveButton, StyledSaveContainer } from "./SaveContainer.styles";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

type SaveContainerProps = {
  counter: CounterType;
};

export default function SaveContainer({ counter }: SaveContainerProps) {
  const [saved, setSaved] = useState(false);
  const {
    formState: { isValid },
  } = useFormContext();

  useEffect(() => {
    if (saved) {
      const timer = setTimeout(() => setSaved(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [saved]);

  return (
    <StyledSaveContainer onClick={() => setSaved(true)}>
      <StyledSaveButton
        disabled={counter.length > 0 ? false : true}
        type="submit"
      >
        Save
        {isValid && saved && (
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
      </StyledSaveButton>
    </StyledSaveContainer>
  );
}
