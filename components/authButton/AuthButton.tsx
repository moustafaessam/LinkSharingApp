import { StyledAuthButton } from "./AuthButton.styles";

type AuthButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function AuthButton({ children, onClick }: AuthButtonProps) {
  return (
    <StyledAuthButton type="submit" onClick={onClick}>
      {children}
    </StyledAuthButton>
  );
}
