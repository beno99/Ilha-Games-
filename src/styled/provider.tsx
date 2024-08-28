"use client";

import { ThemeProvider } from "styled-components";

import { Theme } from "../Theme";

export function StyledProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
}
