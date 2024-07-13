import Link from "next/link";
import { Button } from "./ui/button";
import Logo from "./Logo";
import { currentUser } from "@clerk/nextjs/server";
import { ModeToggle } from "./ModeToggle";

export default async function Header() {
  const user = await currentUser();
  return (
    <header className="flex justify-between items-center py-5 px-6 sm:px-8 md:px-20 lg:px-24">
      <div>
        <Logo />
      </div>
      <div className="flex gap-3 items-center">
        <Button asChild variant="pulseBtn">
          <Link href={!user ? "/sign-in" : "/dashboard/manage"}>
            {!user ? "Login" : "Dashboard"}
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}
