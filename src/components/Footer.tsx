import Link from "next/link";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";

export default function Footer() {
  return (
    <footer className="px-8 md:px-20 lg:px-32 py-5 mt-3 grid gap-4">
      <div className="flex justify-between">
        <div>
          <Logo />
          <p className="text-xs">
            Built by{" "}
            <a
              href="https://github.com/Avik-creator"
              className="hover:text-primary hover:underline"
            >
              Avik
            </a>{" "}
            codebase on{" "}
            <a
              className="hover:text-primary hover:underline"
              href="https://github.com/Avik-creator/socials"
            >
              github
            </a>
          </p>
        </div>
      </div>
      <ul className=" flex flex-row-reverse text-sm gap-5">
        <li className="hover:underline hover:text-primary text-sm">
          <Link href="https://github.com/Avik-creator/socials">
            Fix This Web
          </Link>
        </li>
        <li className="hover:underline hover:text-primary text-sm">
          <Link href="https://github.com/Avik-creator/socials">
            Report An Issue
          </Link>
        </li>
      </ul>
      <p className="flex justify-center text-xs">
        &copy; {new Date().getFullYear()}{" "}
        <Link href="/" className="text-primary hover:underline">
          Socials
        </Link>{" "}
        All Rights Reserved.
      </p>
    </footer>
  );
}
