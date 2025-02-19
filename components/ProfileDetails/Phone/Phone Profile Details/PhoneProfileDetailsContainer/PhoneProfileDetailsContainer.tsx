import PhoneEmailEmpty from "../PhoneEmailContainer/PhoneEmailEmpty/PhoneEmailEmpty";
import EmptyImage from "../PhoneImageContainer/EmptyImage/EmptyImage";
import PhoneNameEmpty from "../PhoneNameContainer/PhoneNameEmpty/PhoneNameEmpty";
import { StyledProfileDetailsContainer } from "./PhoneProfileDetailsContainer.styles";

// Here were we going to fetch the phone profile details

export default function PhoneProfileDetailsContainer() {
  return (
    <StyledProfileDetailsContainer>
      <EmptyImage />
      <PhoneNameEmpty />
      <PhoneEmailEmpty />
    </StyledProfileDetailsContainer>
  );
}
