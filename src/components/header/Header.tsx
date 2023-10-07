import Link from "next/link";
import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SignoutButton } from "../commons/auth/AuthButtons";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header>
      <Link href="/">Coquelicot</Link>
      {session ? (
        <>
          <SignoutButton />
          <p>{session?.user?.name}</p>
        </>
      ) : (
        <Link href="/sign-in">Sign in</Link>
      )}
    </header>
  );
}
