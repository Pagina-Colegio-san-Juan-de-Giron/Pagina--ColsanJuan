import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/libs/db"
import bcrypt from 'bcrypt'
import { User } from "@prisma/client";
import { use } from "react";
import Email from "next-auth/providers/email";
import { error } from "console";

const AuthOpts = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                Username: { label: "Username", type: "text", placeholder: "User"},
                pswd: {label: "Password", type: "password"}
            },
            
            async authorize(credentials, request): Promise<any>{
                if(!credentials) throw new Error ("No hay credenciales")
                    const foundeduser: User | null = await db.user.findUnique({
                        where: {
                            Username: credentials.Username,
                            pswd: credentials.pswd
                        }
                    })

                    if (!foundeduser) throw new Error("No se encontro el usuario")


                    else if(credentials.pswd != foundeduser.pswd){
                        throw new Error("Contraseña incorrecta")
                    } 
            
                    console.log(credentials.pswd, foundeduser.pswd)

                    return {
                        id: foundeduser.id,
                        name: foundeduser.Username
                    }
                
            },
        })
    ],
    pages: {
        signIn: "/auth/signin"
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = nextAuth(AuthOpts);

export { handler as GET, handler as POST };