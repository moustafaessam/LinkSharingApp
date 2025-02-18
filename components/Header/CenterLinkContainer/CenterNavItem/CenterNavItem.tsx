"use client";
import {
  StyledNavItemContainer,
  StyledNavItemText,
} from "./CenterNavItem.styles";
import { usePathname } from "next/navigation";

type CenterNavItemProps = {
  pathShape: string;
  name: string;
  href: string;
};

export default function CenterNavItem({
  pathShape,
  name,
  href,
}: CenterNavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <StyledNavItemContainer isactive={isActive ? "true" : "false"} href={href}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        fill="none"
        viewBox="0 0 21 20"
      >
        <path fill={isActive ? "#633CFF" : "#737373"} d={pathShape} />
      </svg>
      <StyledNavItemText>{name}</StyledNavItemText>
    </StyledNavItemContainer>
  );
}
