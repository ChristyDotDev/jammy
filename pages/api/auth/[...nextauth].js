import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
          console.log("SIGNIN");
          return true
        },
        async redirect({ url, baseUrl }) {
          return baseUrl
        },
        async session({ session, user, token }) {
          console.log("SESSION");
          return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
          console.log("JWT");
          return token
        }
      }
    })
  ],
})