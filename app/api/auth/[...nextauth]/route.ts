import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Replace this with your DB logic
        if (
          credentials?.username === "admin" &&
          credentials?.password === "admin123"
        ) {
          return { id: "1", name: "Admin" };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login", // Optional
  },
};

const handler = NextAuth(authOptions as AuthOptions);
export { handler as GET, handler as POST };
