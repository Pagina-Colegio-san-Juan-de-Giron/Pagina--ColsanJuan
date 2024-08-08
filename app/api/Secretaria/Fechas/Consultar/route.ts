
import db from "@/libs/db"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function GET(req: Request) {


    try{
        const registro = await db.fecha.findMany()

        if(registro === null){
            console.log("no hay archivo encontrado")
        }
        
        console.log("El registro es: ", registro)
        return Response.json({registro})

        
    }
    catch(err){
        console.log("error al leer fecha", err)
    }
}