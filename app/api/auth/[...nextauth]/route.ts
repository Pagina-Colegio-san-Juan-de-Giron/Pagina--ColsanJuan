import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/libs/db"
import GoogleProvider from "next-auth/providers/google"
import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session extends DefaultSession {
        accessToken?: string;  
        googleAccessToken?: string;  
        credentialsUser?: string;  
    }
  }

const AuthOpts = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    scope: "https://mail.google.com/",
                    access_type: "offline",
                    prompt: "consent",
                },
            },
        }),

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                Username: { label: "Username", type: "text", placeholder: "User"},
                pswd: {label: "Password", type: "password"}
            },
            
            async authorize(credentials) {
                console.log(credentials)
                if(!credentials) throw new Error ("No hay credenciales")
                    const foundeduser = await db.users.findUnique({
                        where: {
                            Username: credentials.Username,
                            pswd: credentials.pswd,
                        },
                        select: {
                            id: true,
                            Username: true,
                            pswd: true,
                        },
                    })

                    const user = {id: foundeduser?.id, pswd: foundeduser?.pswd, Username: foundeduser?.Username}

                    if (!foundeduser) throw new Error("No se encontro el usuario")


                    else if(credentials.pswd != user.pswd){
                        throw new Error("Contraseña incorrecta")
                    } 
            
                    console.log(credentials.pswd, user.pswd)

                    return {
                        id: foundeduser.id.toString(),
                        name: foundeduser.Username
                    }
                
            },
        })
    ],
    pages: {
        signIn: "/Contratacion/ADMIN"
    },
    callbacks: {
        async jwt({ token, account }) {
            if (account && account.provider === "google") {
                token.googleAccessToken = account.access_token;
                token.googleRefreshToken = account.refresh_token || token.googleRefreshToken;
            }
            return token;
        },
        async session({ session, token }) {
            if (token.googleAccessToken) {
                session.googleAccessToken = token.googleAccessToken;
                session.googleRefreshToken = token.googleRefreshToken;  
            }
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = nextAuth(AuthOpts);

export { handler as GET, handler as POST };