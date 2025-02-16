"use client";
import { createGlobalStyle } from "styled-components";
import {
  instrumentSansBold,
  instrumentSansRegular,
  instrumentSansSemiBold,
} from "./font";

export const GlobalStyles = createGlobalStyle`
  * , ::before , ::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  :root {
    /* Colors */
    --purple:#633CFF;
    --purple-hover-color:#BEADFF;
    --light-purple: #efebff; 
    --dark-grey:#333333; 
    --grey:#737373; 
    --borders:#D9D9D9;
    --light-grey:#FAFAFA;
    --white:#FFFFFF; 
    --red:#FF3939;
    /* Font Family */
    --instrument-sans-semi-bold: ${instrumentSansSemiBold.style.fontFamily};
    --instrument-sans-bold: ${instrumentSansBold.style.fontFamily};
    --instrument-sans-regular: ${instrumentSansRegular.style.fontFamily};
  }
  body {
    background-color: var(--light-grey);
  }
`;
