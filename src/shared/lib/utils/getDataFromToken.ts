import jwt_decode from "jwt-decode"

interface IToken {
  email: string
  exp: number
  iat: number
  sub: number
}

export const token: string | false | null =
  typeof window !== "undefined" && localStorage.getItem("social-network")

export const userIdFromToken = token ? (jwt_decode(token) as IToken).sub : null
