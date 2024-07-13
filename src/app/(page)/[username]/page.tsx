import { Metadata } from "next";
import UserSocials from "../_components/UserSocials";

export async function generateMetadata({
  params,
}: {
  params: { username: string };
}): Promise<Metadata> {
  return {
    title: params.username,
  };
}
export default function Page({ params }: { params: { username: string } }) {
  return (
    <div>
      <UserSocials userDataName={params.username} />
    </div>
  );
}
