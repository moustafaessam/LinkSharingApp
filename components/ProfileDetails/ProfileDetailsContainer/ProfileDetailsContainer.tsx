import { StyledProfileDetailsMainContainer } from "./ProfileDetailsContainer.styles";

type ProfileDetailsContainerProps = {
  children:React.ReactNode;
}

export default function ProfileDetailsContainer({children}: ProfileDetailsContainerProps) {
  return (
    <StyledProfileDetailsMainContainer>{children}</StyledProfileDetailsMainContainer>
  );
}
