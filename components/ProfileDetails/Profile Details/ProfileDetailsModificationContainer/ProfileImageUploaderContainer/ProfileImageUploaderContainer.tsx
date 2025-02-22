import ImageUpload from "./ImageUpload/ImageUpload";
import {
  StyledImageDetailsInfo,
  StyledImageUplaoderContainer,
  StyledTitle,
} from "./ProfileImageUploaderContainer.styles";

export default function ProfileImageUploaderContainer() {
  return (
    <StyledImageUplaoderContainer>
      <StyledTitle>Profile Picture</StyledTitle>
      <ImageUpload />
      <StyledImageDetailsInfo>
        Image must be below 1024x1024px. Use PNG or JPG format.
      </StyledImageDetailsInfo>
    </StyledImageUplaoderContainer>
  );
}
