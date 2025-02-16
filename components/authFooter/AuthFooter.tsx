import {
  StyledAuthFooterContainer,
  StyledFooterInfo,
  StyledFooterLink,
} from "./AuthFooter.styles";

type AuthFooter = {
  info: string;
  linkText: string;
};

export default function AuthFooter({ info, linkText }: AuthFooter) {
  return (
    <StyledAuthFooterContainer>
      <StyledFooterInfo>{info}</StyledFooterInfo>
      <StyledFooterLink>{linkText}</StyledFooterLink>
    </StyledAuthFooterContainer>
  );
}
