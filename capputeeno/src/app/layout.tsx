"use client";

import { Header } from "@/components/Header";
import { GlobalStyle } from "../styles/globals";
import { Saira } from "next/font/google";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/styles/themes";

const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Capputeeno",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={saira.className}>
        <ThemeProvider theme={defaultTheme}>
          <Header />
          {children}
          <GlobalStyle />
        </ThemeProvider>
      </body>
    </html>
  );
}
