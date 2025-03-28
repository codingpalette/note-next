// auth.ts


import NextAuth from "next-auth"
import Resend from "next-auth/providers/resend"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma"



export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Resend({
      // If your environment variable is named differently than default
      apiKey: process.env.RESEND_KEY,
      from: process.env.RESEND_FORM
    }),
  ],
  session: {
    strategy: "jwt",
  }
})


