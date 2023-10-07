import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SigninButton } from "@/components/commons/auth/AuthButtons";

export default async function SignIn() {
  const session = await getServerSession(authOptions);
  const providers = await getProviders();

  if (session) {
    redirect("/");
  }

  return (
    <section>
      <h1>Sign In</h1>
      {providers &&
        Object.values(providers).map((provider) => (
          <SigninButton key={provider.id} provider={provider} />
        ))}
    </section>
  );
}
