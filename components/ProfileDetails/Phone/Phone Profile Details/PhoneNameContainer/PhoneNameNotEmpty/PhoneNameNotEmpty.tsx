import React from "react";
import { StyledName } from "./PhoneNameNotEmpty.styles";

type PhoneNameNotEmpty = {
  name: string;
};

export default function PhoneNameNotEmpty({ name }: PhoneNameNotEmpty) {
  return <StyledName>{name}</StyledName>;
}
