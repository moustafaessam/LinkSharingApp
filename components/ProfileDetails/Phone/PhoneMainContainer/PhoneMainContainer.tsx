import PhoneLinksContainer from "../Phone Links/PhoneLinksContainer/PhoneLinksContainer";
import PhoneProfileDetailsContainer from "../Phone Profile Details/PhoneProfileDetailsContainer/PhoneProfileDetailsContainer";
import {
  StyledPhoneInnerBorderImage,
  StyledPhoneInnerDetailsContainer,
  StyledPhoneMainContainer,
  StyledPhoneOuterBorder,
} from "./PhoneMainContainer.styles";

export default function PhoneMainContainer() {
  return (
    <StyledPhoneMainContainer>
      <StyledPhoneOuterBorder>
        <StyledPhoneInnerBorderImage
          src="/images/subtract.png"
          alt="Inner phone border"
          priority={true}
          width={285}
          height={611}
          quality={100}
        />
        <StyledPhoneInnerDetailsContainer>
          <PhoneProfileDetailsContainer />
          <PhoneLinksContainer />
        </StyledPhoneInnerDetailsContainer>
      </StyledPhoneOuterBorder>
    </StyledPhoneMainContainer>
  );
}
