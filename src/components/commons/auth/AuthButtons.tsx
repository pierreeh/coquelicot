"use client";

import { signIn, signOut } from "next-auth/react";

type Provider = {
  provider: {
    callbackUrl: string;
    id: string;
    name: string;
    signinUrl: string;
    type: string;
  };
};

export function SigninButton({ provider }: Provider) {
  return (
    <button onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
      sign in with {provider.name}
    </button>
  );
}

export function SignoutButton() {
  return <button onClick={() => signOut()}>Sign out</button>;
}
