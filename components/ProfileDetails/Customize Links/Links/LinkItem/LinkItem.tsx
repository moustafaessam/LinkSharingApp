"use client";

import {
  StyledContainer,
  StyledHeaderContainer,
  StyledImg,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
  StyledLinkImage,
  StyledLinkInfo,
  StyledRemove,
} from "./LinkItem.styles";
import draggableImg from "../../../../../public/images/icon-drag-and-drop.svg";
import linkImg from "../../../../../public/images/icon-link.svg";
import dynamic from "next/dynamic";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CounterType } from "../../CustomizeLinksContainer/CustomizsLinksContainer";
import { Dispatch, SetStateAction } from "react";

const SelectItem = dynamic(() => import("./SelectItem/SelectItem"), {
  ssr: false,
});

type LinkItem = {
  id: string;
  counter: CounterType;
  setCounter: Dispatch<SetStateAction<CounterType>>;
  position: number;
};

export default function LinkItem({
  id,
  counter,
  setCounter,
  position,
}: LinkItem) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleRemoveLink = () => {
    if (counter.length > 0) {
      setCounter(counter.slice(0, -1));
    }
  };

  return (
    <StyledContainer ref={setNodeRef} style={style}>
      <StyledHeaderContainer>
        <div style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
          <StyledImg
            src={draggableImg}
            alt="draggable"
            {...attributes}
            {...listeners}
          />
          <StyledLinkInfo>Link #{position}</StyledLinkInfo>
        </div>
        <StyledRemove onClick={handleRemoveLink}>Remove</StyledRemove>
      </StyledHeaderContainer>
      <StyledLabel>
        Platform
        <SelectItem />
      </StyledLabel>
      <StyledLabel htmlFor="links">
        Link
        <StyledInputContainer>
          <StyledLinkImage src={linkImg} alt="link" />
          <StyledInput
            placeholder="e.g https://www.example.com/moustafaEssam"
            id="links"
          />
        </StyledInputContainer>
      </StyledLabel>
    </StyledContainer>
  );
}
