import {
  StyledDetailsContainer,
  StyledDetailsHeader,
  StyledDetailSubHeader,
} from "./ProfileDetailsModificationContainer.styles";
import ProfileImageUploaderContainer from "../ProfileImageUploaderContainer/ProfileImageUploaderContainer";
import ProfileDetailsForm from "../ProfileDetailsForm/ProfileDetailsForm";

export default function ProfileDetailsModificationContainer() {
  return (
    <StyledDetailsContainer>
      <StyledDetailsHeader>profile details</StyledDetailsHeader>
      <StyledDetailSubHeader>
        Add your details to create a personal touch to your profile.
      </StyledDetailSubHeader>
      <ProfileImageUploaderContainer />
      <ProfileDetailsForm />
    </StyledDetailsContainer>
  );
}
