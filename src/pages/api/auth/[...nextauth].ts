import NextAuth from 'next-auth';
import * as bcrypt from 'bcrypt';
import {TypeORMLegacyAdapter} from '@next-auth/typeorm-legacy-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';

import {connectionOptions, getOrCreateConnection} from 'utils/database';
import * as entities from 'entities';

export default NextAuth({
  adapter: TypeORMLegacyAdapter(connectionOptions, {entities}),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: 'Email',
          type: 'email',
          placeholder: 'email@example.com',
        },
        password: {
          label: 'Password',
          type: 'password',
        }
      },
      async authorize(credentials) {
        try {
          const conn = await getOrCreateConnection();
          const repo = conn.getRepository(entities.UserEntity);
          const user = await repo.findOne({email: credentials.username});
          const isMatch = await bcrypt.compare(credentials.password, user?.password);

          if (user && isMatch) {
            return user;
          }

          console.log('no user found');

          return null;
        } catch (e) {
          console.log('error', e);

          return null;
        }
      },
    })
  ],
  session: {
    jwt: true,
  },
  jwt: {
    secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
  },
  callbacks: {
    async redirect(params) {
      return params.baseUrl;
    },
  },
  debug: true,
});
