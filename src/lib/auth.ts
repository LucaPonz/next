import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"
import prisma from "./db";

export const { auth, signIn } = NextAuth({
    pages: {
        signIn: "/login"
    },
    providers: [
        Credentials({
            
            async authorize(credentials) {

                // run on login

                const { email, password } = credentials
              
                const user = await prisma.user.findUnique({
                    where:{
                        userEmail: email,
                    }
                })
                
                if(!user){
                    console.log("there is no user")
                    return null
                }

                // temporaneo
                const hashedPassword = await bcrypt.hash(user.password, 10)

                const passwordMatch = await bcrypt.compare(
                    password,
                    hashedPassword
                )
                if(!passwordMatch){
                    console.log("invalid credentials")
                    return null
                }

                return user
            }

        })
    ],
    callbacks: {
        authorized: ({auth, request}) => {

            // run on every request with middleware

            const isLoggedIn = Boolean(auth?.user)
            const isTryngToAccess = request.nextUrl.pathname.includes("/app")

            if(!isLoggedIn && isTryngToAccess){
                return false
            }
            if(isLoggedIn && isTryngToAccess){
                return true
            }
                return true
               
        },
        jwt: async ({ token, user }) => {
            if (user) {
              // on sign in
              token.idToken = user.id
            }
        return token
        },
        session: ({ session, token }) => {
            if(token.idToken) {
                session.user.id = token.idToken;
            }
        return session;
    },
    }
})