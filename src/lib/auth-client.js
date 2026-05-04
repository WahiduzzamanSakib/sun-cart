import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://sun-cart-c2md.vercel.app"
})