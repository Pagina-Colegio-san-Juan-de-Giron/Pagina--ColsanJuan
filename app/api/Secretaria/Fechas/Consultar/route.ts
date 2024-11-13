
import db from "@/libs/db"

export async function GET() {


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