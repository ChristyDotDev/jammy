import { useSession, signIn, signOut } from "next-auth/react"
import { getToken } from "next-auth/jwt"

export default function SpotifyRecommendation() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Spotify Shit
        {console.log(token)}
      </>
    )
  }
}