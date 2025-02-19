import { StyledEmail } from "./PhoneEmailNotEmpty.styles";

type PhoneEmailNotEmptyProps = {
  email: string;
};

export default function PhoneEmailNotEmpty({ email }: PhoneEmailNotEmptyProps) {
  return <StyledEmail>{email}</StyledEmail>;
}
