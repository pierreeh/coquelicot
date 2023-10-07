import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      name: string;
    };
  }

  interface User {
    role: string;
  }
}
