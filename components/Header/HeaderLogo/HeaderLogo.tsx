import image from "/public/images/logo-devlinks-large.svg";
import imageSmall from "/public/images/logo-devlinks-small.svg";
import {
  StyledImageContainer,
  StyledImageDesktop,
  StyledImageMobile,
} from "./HeaderLogo.styles";

export default function HeaderLogo() {
  return (
    <>
      <StyledImageContainer>
        <StyledImageMobile
          src={imageSmall}
          alt="mobile-logo"
          width={32}
          height={32}
        />
      </StyledImageContainer>

      <StyledImageDesktop
        src={image}
        alt="desktop-logo"
        width={146}
        height={32}
      />
    </>
  );
}
