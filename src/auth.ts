import NextAuth from 'next-auth';
import github from 'next-auth/providers/github';
import { db } from './db';
import { user as dbUser } from './db/schema';
import { eq } from 'drizzle-orm';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [github],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.uid = user.id;
      }
      if (account) {
        token.provider = account.provider;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.uid as string;
      }
      return session;
    },
    async signIn({ user, account }) {
      if (!user.email) {
        return false;
      }

      try {
        const exitstingUser = await db.query.user.findFirst({
          where: eq(dbUser.email, user.email),
        });
        if (!exitstingUser) {
          const [newUser] = await db
            .insert(dbUser)
            .values({
              name: user.name ?? 'Jhon Doe',
              email: user.email,
              profile_pic: user.image,
              provider: account?.provider,
            })
            .returning();
          user.id = newUser?.id;
          user.name = newUser?.name;
          user.image = newUser?.profile_pic;
        } else {
          user.id = exitstingUser.id;
          user.name = exitstingUser?.name;
          user.image = exitstingUser?.profile_pic;
        }
        return true;
      } catch (error) {
        console.error('Error during sign in:', error);
        return false;
      }
    },
  },
});
