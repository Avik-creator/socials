import { Label } from "@/components/ui/label";
import { currentUser } from "@clerk/nextjs/server";
import ManageForm from "../../_components/ManageForm";
import Link from "next/link";
import UserPageLink from "../../_components/UserPageLink";
import Image from "next/image";
import Next from "../../../../../public/next.svg";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { username: string };
}) {
  return {
    title: "Manage",
  };
}

export default async function Page() {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }
  const { imageUrl, firstName } = (await currentUser()) as {
    imageUrl: string;
    firstName: string;
  };

  return (
    <div>
      <UserPageLink />
      <div className="py-5 px-6 md:px-20 lg:px-32 mb-16">
        <div>
          <div className="flex flex-col items-center justify-center gap-2 mt-10">
            <Image
              className="w-20 h-20 rounded-full"
              src={imageUrl || Next}
              alt={firstName}
              width={80}
              height={80}
            />
            <Label>Profile Image</Label>
            <p className="text-xs dark:text-gray-400 text-gray-600">
              to change profile picture{" "}
              <Link
                href="/user-profile/profile"
                className="text-primary hover:underline"
              >
                click here
              </Link>
              <span className="text-red-600">*</span>
            </p>
          </div>
          <ManageForm />
        </div>
      </div>
    </div>
  );
}
