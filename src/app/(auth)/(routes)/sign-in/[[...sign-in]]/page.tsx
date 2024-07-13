"use client";
import { SignIn } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function Page() {
  const { resolvedTheme } = useTheme();
  let currentTheme = resolvedTheme == "dark" ? dark : neobrutalism;
  return <SignIn appearance={{ baseTheme: currentTheme }} />;
}
