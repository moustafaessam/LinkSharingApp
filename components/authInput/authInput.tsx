import Image from "next/image";
import {
  StyledInputContainer,
  StyledLabel,
  StyledLabelHeader,
} from "./authInput.styles";

type AuthInput = {
  header: string;
  children: React.ReactNode;
  img: string;
};

export default function AuthInput({ header, children, img }: AuthInput) {
  return (
    <StyledLabel>
      <StyledLabelHeader>{header}</StyledLabelHeader>
      <StyledInputContainer>
        <Image src={img} alt={header} width={13} height={10} />
        {children}
      </StyledInputContainer>
    </StyledLabel>
  );
}
