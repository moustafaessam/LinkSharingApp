import InnerHeaderContainer from "@/components/Header/InnerHeaderContainer/InnerHeaderContainer";
import MainHeaderContainer from "@/components/Header/MainHeaderContainer/MainHeaderContainer";
import React from "react";
import BackToEditor from "../BackToEditor/BackToEditor";
import ShareLink from "../ShareLink/ShareLink";
import { StyledHeaderHalfPurpleBackground } from "./PreviewHeader.styles";

export default function PreviewHeader() {
  return (
    <>
      <StyledHeaderHalfPurpleBackground>
        <MainHeaderContainer>
          <InnerHeaderContainer>
            <BackToEditor />
            <ShareLink />
          </InnerHeaderContainer>
        </MainHeaderContainer>
      </StyledHeaderHalfPurpleBackground>
    </>
  );
}
