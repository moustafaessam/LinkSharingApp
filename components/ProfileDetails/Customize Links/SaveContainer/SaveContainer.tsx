import { CounterType } from "../CustomizeLinksContainer/CustomizsLinksContainer";
import { StyledSaveButton, StyledSaveContainer } from "./SaveContainer.styles";

type SaveContainerProps = {
  counter: CounterType;
};

export default function SaveContainer({ counter }: SaveContainerProps) {
  return (
    <StyledSaveContainer>
      <StyledSaveButton disabled={counter.length > 0 ? false : true}>
        Save
      </StyledSaveButton>
    </StyledSaveContainer>
  );
}
