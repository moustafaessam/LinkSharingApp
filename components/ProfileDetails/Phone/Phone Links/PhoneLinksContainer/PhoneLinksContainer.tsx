import PhoneLinkItemEmpty from "../PhoneLinkItem/PhoneLinkItemEmpty/PhoneLinkItemEmpty";
import PhoneLinkItemNotEmpty from "../PhoneLinkItem/PhoneLinkItemNotEmpty/PhoneLinkItemNotEmpty";
import { StyledLinksContainer } from "./PhoneLinksContainer.styles";

// Here we going to fetch and map over the links items to display it in the phone

export default function PhoneLinksContainer() {
  return (
    <StyledLinksContainer>
      <PhoneLinkItemNotEmpty
        backgroundColor="#EE3939"
        icon="/images/icon-youtube.svg"
        name="youtube"
      />
      <PhoneLinkItemEmpty />
      <PhoneLinkItemEmpty />
      <PhoneLinkItemEmpty />
      <PhoneLinkItemEmpty />
    </StyledLinksContainer>
  );
}
