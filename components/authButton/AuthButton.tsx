import { StyledAuthButton } from "./AuthButton.styles";

type AuthButtonProps = {
  children: React.ReactNode;
};

export default function AuthButton({ children }: AuthButtonProps) {
  return <StyledAuthButton type="submit">{children}</StyledAuthButton>;
}
