import Image from "next/image";
import {
  StyledPreviewImageContainer,
  StyledPreviewNavContainer,
} from "./PreviewNav.style";

export default function PreviewNav() {
  return (
    <>
      <StyledPreviewNavContainer href="/preview">
        Preview
      </StyledPreviewNavContainer>
      <StyledPreviewImageContainer href="/preview">
        <Image src="/images/icon-preview-header.svg" alt="preview" width={20} height={20} />
      </StyledPreviewImageContainer>
    </>
  );
}
