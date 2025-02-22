import Image from "next/image";
import {
  StyledLinkImage,
  StyledLinkItemContainer,
  StyledLinkItemDetails,
  StyledLinkName,
} from "./PhoneLinkItemNotEmpty.styles";

type PhoneLinkItemNotEmptyProps = {
  backgroundColor: string;
  icon: string;
  name: string;
};

export default function PhoneLinkItemNotEmpty({
  backgroundColor,
  icon,
  name,
}: PhoneLinkItemNotEmptyProps) {
  return (
    <StyledLinkItemContainer backgroundcolor={backgroundColor}>
      <StyledLinkItemDetails>
        <StyledLinkImage src={icon} alt="link" width={16} height={16} />
        <StyledLinkName>{name}</StyledLinkName>
      </StyledLinkItemDetails>
      <Image
        src="/images/icon-arrow-right.svg"
        alt="visit"
        width={16}
        height={16}
      />
    </StyledLinkItemContainer>
  );
}
