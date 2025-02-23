import { StyledContainer } from "./LinksContainer.styles";
import LinkItem from "../LinkItem/LinkItem";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { CounterType } from "../../CustomizeLinksContainer/CustomizsLinksContainer";
import { Dispatch, SetStateAction } from "react";

type LinksContainerProps = {
  counter: CounterType;
  setCounter: Dispatch<SetStateAction<CounterType>>;
};

export default function LinksContainer({
  counter,
  setCounter,
}: LinksContainerProps) {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = counter.findIndex((link) => link === active.id);
      const newIndex = counter.findIndex((link) => link === over.id);
      setCounter((prev) => arrayMove(prev, oldIndex, newIndex));
    }
  };
  return (
    <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={handleDragEnd}>
      <SortableContext items={counter}>
        <StyledContainer>
          {counter.map((id, index) => (
            <LinkItem
              key={id}
              id={id}
              position={index + 1}
              counter={counter}
              setCounter={setCounter}
            />
          ))}
        </StyledContainer>
      </SortableContext>
    </DndContext>
  );
}
