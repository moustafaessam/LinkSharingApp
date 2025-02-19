import { StyledImage, StyledImageContainer } from "./NonEmptyImage.styles";

type NonEmptyImageProps = {
  imgSrc: string;
};

export default function NonEmptyImage({ imgSrc }: NonEmptyImageProps) {
  return (
    <StyledImageContainer>
      <StyledImage src={imgSrc} />
    </StyledImageContainer>
  );
}
