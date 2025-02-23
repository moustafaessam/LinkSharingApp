"use client";
import { useState } from "react";
import AddNewLink from "../AddNewLink/AddNewLink";
import EmptyContainer from "../EmptyContainer/EmptyContainer";
import LinksContainer from "../Links/LinksContainer/LinksContainer";
import SaveContainer from "../SaveContainer/SaveContainer";
import {
  StyledCustomizeInnerContainer,
  StyledCustomizeSection,
  StyledHeader,
  StyledSubHeader,
} from "./CustomizeLinksContainer.styles";

export type CounterType = string[];

export default function CustomizsLinksContainer() {
  const [counter, setCounter] = useState<CounterType>([]);
  return (
    <StyledCustomizeSection>
      <StyledCustomizeInnerContainer>
        <StyledHeader>Customize your links</StyledHeader>
        <StyledSubHeader>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </StyledSubHeader>
        <AddNewLink counter={counter} setCounter={setCounter} />
        {counter.length > 0 ? (
          <LinksContainer counter={counter} setCounter={setCounter} />
        ) : (
          <EmptyContainer />
        )}
      </StyledCustomizeInnerContainer>
      <SaveContainer counter={counter} />
    </StyledCustomizeSection>
  );
}
