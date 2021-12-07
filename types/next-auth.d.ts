import NextAuth from 'next-auth';

import {SessionEntity} from '../src/entities/Session';
import {AccountEntity} from '../src/entities/Account';

declare module 'next-auth' {
  class UserEntity {
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
}
