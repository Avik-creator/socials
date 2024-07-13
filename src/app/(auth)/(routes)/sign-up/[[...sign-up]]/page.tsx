"use client";
import { SignUp } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function Page() {
  const { resolvedTheme } = useTheme();
  let currentTheme = resolvedTheme == "dark" ? dark : neobrutalism;
  return <SignUp appearance={{ baseTheme: currentTheme }} />;
}
