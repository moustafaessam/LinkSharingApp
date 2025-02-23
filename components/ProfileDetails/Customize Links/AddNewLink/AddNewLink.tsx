import { Dispatch, SetStateAction } from "react";
import { CounterType } from "../CustomizeLinksContainer/CustomizsLinksContainer";
import { StyledButton } from "./AddNewLink.styles";

type AddNewLinkProps = {
  counter: CounterType;
  setCounter: Dispatch<SetStateAction<CounterType>>;
};

export default function AddNewLink({ counter, setCounter }: AddNewLinkProps) {
  function handleCounterIncrease() {
    const newItem = (counter.length + 1).toString();
    setCounter([...counter, newItem]);
  }
  return (
    <StyledButton type="button" onClick={handleCounterIncrease}>
      + Add new link
    </StyledButton>
  );
}
