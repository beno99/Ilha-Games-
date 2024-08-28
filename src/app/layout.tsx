import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalStyle } from "../GlobalStayle";
import StyledJsxRegistry from "../styled/registry/styledRegistry";
import { StyledProvider } from "../styled/provider";
import { Wrapper } from "@/styled/Wepper/wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ilha Games",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <StyledProvider>
        <body>
          <StyledJsxRegistry>{children}</StyledJsxRegistry>
          <GlobalStyle />
        </body>
      </StyledProvider>
    </html>
  );
}
