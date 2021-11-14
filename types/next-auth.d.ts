import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    id: string
    name: string | null
    email: string | null
    emailVerified: string | null
    password: string | null
    salt: string | null
    role: string | null
    sessions: SessionEntity[]
    accounts: AccountEntity[]
  }

  class UserEntity {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: string | null;
    password: string | null;
    salt: string | null;
    sessions: SessionEntity[];
    accounts: AccountEntity[];
  }
}
