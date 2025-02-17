import {
  StyledAuthFooterContainer,
  StyledFooterInfo,
  StyledFooterLink,
} from "./AuthFooter.styles";

type AuthFooter = {
  info: string;
  linkText: string;
  path: string;
};

export default function AuthFooter({ info, linkText, path }: AuthFooter) {
  return (
    <StyledAuthFooterContainer>
      <StyledFooterInfo>{info}</StyledFooterInfo>
      <StyledFooterLink href={path}>{linkText}</StyledFooterLink>
    </StyledAuthFooterContainer>
  );
}
