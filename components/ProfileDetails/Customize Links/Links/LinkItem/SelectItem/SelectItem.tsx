"use client";

import Select, {
  StylesConfig,
  components,
  DropdownIndicatorProps,
} from "react-select";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react"; // For dropdown icons
import { Controller, useFormContext } from "react-hook-form";

type OptionType = {
  value: string;
  label: string;
  icon: string;
};

type SelectItemProps = {
  id: string;
};

const options: OptionType[] = [
  { value: "github", label: "Github", icon: "/images/icon-github.svg" },
  { value: "youtube", label: "Youtube", icon: "/images/icon-youtube.svg" },
  { value: "linkedin", label: "Linkedin", icon: "/images/icon-linkedin.svg" },
  { value: "facebook", label: "Facebook", icon: "/images/icon-facebook.svg" },
  {
    value: "frontendmentor",
    label: "Frontend Mentor",
    icon: "/images/icon-frontend-mentor.svg",
  },
  { value: "hashnode", label: "Hashnode", icon: "/images/icon-hashnode.svg" },
  { value: "codepen", label: "Codepen", icon: "/images/icon-codepen.svg" },
  { value: "codewars", label: "Codewars", icon: "/images/icon-codewars.svg" },
  { value: "devto", label: "Devto", icon: "/images/icon-devto.svg" },
  {
    value: "freecodecamp",
    label: "Freecodecamp",
    icon: "/images/icon-freecodecamp.svg",
  },
  {
    value: "gitlab",
    label: "Gitlab",
    icon: "/images/icon-gitlab.svg",
  },
];
const CustomDropdownIndicator = (
  props: DropdownIndicatorProps<OptionType, false>
) => {
  const { selectProps } = props;
  return (
    <components.DropdownIndicator {...props}>
      {selectProps.menuIsOpen ? (
        <ChevronUp size={20} />
      ) : (
        <ChevronDown size={20} />
      )}
    </components.DropdownIndicator>
  );
};

const styles: StylesConfig<OptionType, false> = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    boxShadow: state.isFocused ? "0 0 5px 0 var(--purple)" : undefined,
    backgroundCcolor: "var(--white)",
    border: "1px solid var(--borders)",
    borderRadius: "0.8rem",
    padding: "1.2rem 1.6rem",
    "&:hover": {
      border: "1px solid var(--borders)",
    },
  }),
  option: (baseStyles, { isSelected }) => ({
    ...baseStyles,
    fontFamily: " var(--instrument-sans-regular)",
    fontSize: "1.6rem",
    lineHeight: "150%",
    margin: 0,
    padding: 0,
    paddingBottom: "1.2rem",
    paddingTop: "1.2rem",
    borderBottom: "1px solid var(--borders)",
    color: isSelected ? "var(--purple)" : "var(--dark-grey)",
    backgroundColor: "transparent", // Remove hover effect
    "&:focus": {
      backgroundColor: "transparent",
    },
    "&:active": {
      backgroundColor: "transparent",
    },
    cursor: "pointer",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: " var(--instrument-sans-regular)",
    fontSize: "1.6rem",
    lineHeight: "150%",
    margin: 0,
    padding: 0,
    color: "var(--dark-grey)",
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    caretColor: "var(--purple)",
    fontFamily: " var(--instrument-sans-regular)",
    fontSize: "1.6rem",
    lineHeight: "150%",
    margin: 0,
    padding: 0,
    color: "var(--dark-grey)",
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    fontFamily: " var(--instrument-sans-regular)",
    fontSize: "1.6rem",
    lineHeight: "150%",
    margin: 0,
    padding: 0,
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    padding: "0",
    margin: "0",
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    padding: 0,
    borderRadius: "0.8rem",
    cursor: "pointer",
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    margin: 0,
    padding: "1.2rem 1.6rem",
  }),
  indicatorsContainer: (baseStyles) => ({
    ...baseStyles,
    padding: 0,
    margin: 0,
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    padding: 0,
    margin: 0,
    color: "var(--purple)",
    "&:hover": {
      color: "var(--purple)",
    },
    cursor: "pointer",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

export default function SelectItem({ id }: SelectItemProps) {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        name={`select-${id}`}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            styles={styles}
            components={{ DropdownIndicator: CustomDropdownIndicator }}
            formatOptionLabel={({ label, icon }) => (
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <Image src={icon} alt={label} width={20} height={20} />
                <span>{label}</span>
              </div>
            )}
            value={field.value}
            onChange={(selected) => field.onChange(selected)}
          />
        )}
      />
    </>
  );
}
