"use client";
import { useTheme } from "next-themes";
import SocialLight from "../../public/socials-light.png";
import SocialDark from "../../public/socials-dark.png";
import Image from "next/image";

export default function DemoImage() {
  const { resolvedTheme } = useTheme();
  let currentTheme = resolvedTheme == "dark" ? SocialDark : SocialLight;
  //   return <img className="rounded-md" src={currentTheme} alt="demo" />;
  return <Image className="rounded-md" src={currentTheme} alt="demo" />;
}
