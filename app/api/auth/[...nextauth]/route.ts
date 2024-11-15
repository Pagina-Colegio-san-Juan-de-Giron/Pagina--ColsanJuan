import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/libs/db"


const AuthOpts = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                Username: { label: "Username", type: "text", placeholder: "User"},
                pswd: {label: "Password", type: "password"}
            },
            
            async authorize(credentials) {
                console.log(credentials)
                if(!credentials) throw new Error ("No hay credenciales")
                    const foundeduser = await db.Users.findUnique({
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
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = nextAuth(AuthOpts);

export { handler as GET, handler as POST };