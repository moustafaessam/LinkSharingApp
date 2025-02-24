"use client";
import { useEffect, useState } from "react";
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
import { FormProvider, useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/utils/supabase/client";
import { transformData } from "./utils";

export type CounterType = string[];

export default function CustomizsLinksContainer() {
  const queryClient = useQueryClient();
  const supabase = createClient();
  const [counter, setCounter] = useState<CounterType>([]);
  const form = useForm({ mode: "onChange" });
  const { handleSubmit, setValue } = form;

  // 🚀 Query to fetch existing links
  const { data: existingLinks } = useQuery({
    queryKey: ["userLinks"],
    queryFn: async () => {
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();
      if (sessionError) throw sessionError;

      const userId = session?.user?.id;
      if (!userId) throw new Error("User not authenticated");

      const { data, error } = await supabase
        .from("links")
        .select("platform, url")
        .eq("user_id", userId);

      if (error) throw new Error(`Fetch error: ${error.message}`);
      return data || [];
    },
  });

  // 📝 Mutation to handle form submission
  const { mutate } = useMutation({
    mutationFn: async (data: Record<string, string>) => {
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();
      if (sessionError) throw sessionError;

      const userId = session?.user?.id;
      if (!userId) throw new Error("User not authenticated");

      const { data: existingLinks, error: fetchError } = await supabase
        .from("links")
        .select("id")
        .eq("user_id", userId);

      if (fetchError) throw new Error(`Fetch error: ${fetchError.message}`);

      if (existingLinks?.length > 0) {
        const { error: deleteError } = await supabase
          .from("links")
          .delete()
          .eq("user_id", userId);
        if (deleteError)
          throw new Error(`Delete error: ${deleteError.message}`);
      }

      const { data: insertedData, error: insertError } = await supabase
        .from("links")
        .insert(transformData(data, userId));

      if (insertError) throw new Error(`Insert error: ${insertError.message}`);
      return insertedData;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userLinks"] });
    },
  });

  // 📥 Handle form submission
  function onSubmit(data: Record<string, string>) {
    mutate(data);
  }

  // 🧩 Populate form fields & counter when existing links are fetched
  useEffect(() => {
    if (existingLinks && existingLinks.length > 0) {
      const newCounter = existingLinks.map((_, index) =>
        (index + 1).toString()
      );
      setCounter(newCounter);

      existingLinks.forEach((link, index) => {
        const selectKey = `select-${index + 1}`;
        const linkKey = `link-${index + 1}`;

        setValue(selectKey, {
          value: link.platform,
          label: link.platform.charAt(0).toUpperCase() + link.platform.slice(1),
          icon: `/images/icon-${link.platform.toLowerCase()}.svg`,
        });
        setValue(linkKey, link.url);
      });
    } else {
      setCounter([]); // No existing links
    }
  }, [existingLinks, setValue]);

  return (
    <FormProvider {...form}>
      <StyledCustomizeSection onSubmit={handleSubmit(onSubmit)}>
        <StyledCustomizeInnerContainer>
          <StyledHeader>Customize your links</StyledHeader>
          <StyledSubHeader>
            Add/edit/remove links below and then share all your profiles with
            the world!
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
    </FormProvider>
  );
}
