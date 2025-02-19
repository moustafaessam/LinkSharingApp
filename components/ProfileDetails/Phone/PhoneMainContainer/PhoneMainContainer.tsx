import PhoneProfileDetailsContainer from "../Phone Profile Details/PhoneProfileDetailsContainer/PhoneProfileDetailsContainer";
import {
  StyledPhoneInnerBorderImage,
  StyledPhoneInnerDetailsContainer,
  StyledPhoneMainContainer,
  StyledPhoneOuterBorder,
} from "./PhoneMainContainer.styles";

// Details of the customer will be fetched in here from supabase
// Make two version of each component: Empty and Non-Empty style
// For Each component it will be linked to a column in subapase if this column is empty will show the empty container if not and contain some details will show the non empty style
// Make two tables in supabase the one related to the user details: Image , name and email
// Second table will be the links so we can map over this table (if less than seven links will show the rest of the five empty links container, if greater than 5 links will show them all)

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
          {/* Profile Details */}
          <PhoneProfileDetailsContainer />
          {/* Links */}
          <div></div>
        </StyledPhoneInnerDetailsContainer>
      </StyledPhoneOuterBorder>
    </StyledPhoneMainContainer>
  );
}
