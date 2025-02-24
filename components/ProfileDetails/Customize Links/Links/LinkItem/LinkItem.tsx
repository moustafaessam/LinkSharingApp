"use client";

import {
  StyledContainer,
  StyledError,
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
import { useFormContext } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/utils/supabase/client";

const SelectItem = dynamic(() => import("./SelectItem/SelectItem"), {
  ssr: false,
});

type LinkItemProps = {
  id: string;
  counter: CounterType;
  setCounter: Dispatch<SetStateAction<CounterType>>;
  position: number;
};

export default function LinkItem({
  id,
  setCounter,
  position,
  counter,
}: LinkItemProps) {
  const queryClient = useQueryClient();
  const supabase = createClient();

  const { mutate } = useMutation({
    mutationFn: async () => {
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError) throw sessionError;
      const userId = session?.user?.id;
      if (!userId) throw new Error("User not authenticated");

      const { error: deleteError } = await supabase
        .from("links")
        .delete()
        .eq("user_id", userId);

      if (deleteError) throw new Error(`Delete error: ${deleteError.message}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userLinks"] });
    },
  });

  const {
    register,
    watch,
    formState: { errors },
    unregister,
    getValues,
  } = useFormContext();

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleRemoveLink = () => {
    // 🔑 Unregister form fields BEFORE updating counter
    unregister(`select-${id}`);
    unregister(`link-${id}`);
    if (counter.length <= 1) {
      mutate();
    }
    // ✅ Remove the clicked item from counter
    setCounter((prev) => prev.filter((linkId) => linkId !== id));
  };

  const watchSelect = watch(`select-${id}`)?.value;

  const values = getValues();

  const selectedPlatformsStage1 = Object.entries(values).filter(([key]) =>
    key.startsWith("select-")
  );

  const selectedPlatformsStage2 = selectedPlatformsStage1.map((platforms) => {
    return platforms?.[1]?.value;
  });

  const occurrenceCount = selectedPlatformsStage2.filter(
    (platform) => platform === watchSelect
  ).length;

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
        <SelectItem id={id} />
      </StyledLabel>

      <StyledLabel htmlFor={`link-${id}`}>
        Link
        <StyledInputContainer>
          <StyledLinkImage src={linkImg} alt="link" />
          <StyledInput
            placeholder={
              watchSelect
                ? `e.g https://www.${watchSelect}.com/john`
                : "e.g https://www.platform.com/john"
            }
            id={`link-${id}`}
            {...register(`link-${id}`, {
              required: { value: true, message: "Can't be empty" },
              validate: {
                urlValidation: (fieldValue) => {
                  if (!watchSelect) return "Select a platform first";
                  const regex = new RegExp(
                    `^https:\/\/(www\\.)?${watchSelect.toLowerCase()}\\.com\\/[A-Za-z0-9_-]+\\/?$`
                  );
                  return (
                    regex.test(fieldValue.toLowerCase()) ||
                    "Please check the URL"
                  );
                },
                plaformAlreadySelected: () => {
                  return occurrenceCount > 1
                    ? "This platform has already been selected."
                    : true;
                },
              },
            })}
          />
          {errors?.[`link-${id}`]?.message && (
            <StyledError>{errors[`link-${id}`]?.message as string}</StyledError>
          )}
        </StyledInputContainer>
      </StyledLabel>
    </StyledContainer>
  );
}
