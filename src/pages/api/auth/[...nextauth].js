import NextAuth from "next-auth/next";
import FacebookProvider from "next-auth/providers/facebook";
// import { NextAuthOptions } from "next-auth";

export const NextAuthOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      secret: process.env.NEXTAUTH_SECRET,
    }),
  ],
};

export default NextAuth(NextAuthOptions);
