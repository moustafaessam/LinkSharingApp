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
  iserror: "true" | undefined;
};

export default function AuthInput({
  header,
  children,
  img,
  iserror,
}: AuthInput) {
  return (
    <StyledLabel>
      <StyledLabelHeader>{header}</StyledLabelHeader>
      <StyledInputContainer iserror={iserror}>
        <Image src={img} alt={header} width={13} height={10} />
        {children}
      </StyledInputContainer>
    </StyledLabel>
  );
}
