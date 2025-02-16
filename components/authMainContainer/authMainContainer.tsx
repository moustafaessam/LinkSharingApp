import Image from "next/image";
import logo from "../../public/images/logo-devlinks-large.svg";
import {
  StyledAuthForm,
  StyledAuthHeader,
  StyledAuthMainContainer,
  StyledAuthMainInnerContainer,
  StyledAuthSubHeader,
} from "./authMainContainer.styles";

type AuthMainContainerProps = {
  header: "login" | "create account";
  subHeader:
    | "Add your details below to get back into the app"
    | "Let’s get you started sharing your links!";
  children: React.ReactNode;
};

export default function AuthMainContainer({
  header,
  subHeader,
  children,
}: AuthMainContainerProps) {
  return (
    <StyledAuthMainContainer>
      <StyledAuthMainInnerContainer>
        <Image src={logo} alt="Logo" />
        <StyledAuthForm>
          <StyledAuthHeader>{header}</StyledAuthHeader>
          <StyledAuthSubHeader>{subHeader}</StyledAuthSubHeader>
          {children}
        </StyledAuthForm>
      </StyledAuthMainInnerContainer>
    </StyledAuthMainContainer>
  );
}
