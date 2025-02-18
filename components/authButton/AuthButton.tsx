import { StyledAuthButton } from "./AuthButton.styles";

type AuthButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled: boolean;
};

export default function AuthButton({
  children,
  onClick,
  disabled,
}: AuthButtonProps) {
  return (
    <StyledAuthButton type="submit" onClick={onClick} disabled={disabled}>
      {children}
    </StyledAuthButton>
  );
}
