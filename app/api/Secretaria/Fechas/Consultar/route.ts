
import db from "@/libs/db"

export async function GET() {

    let registro
    try{
        registro = await db.fecha.findMany()

        if(registro === null){
            console.log("no hay archivo encontrado")
        }
        
    }
    catch(err){
        console.log("error al leer fecha", err)
    }

    try {
        console.log("El registro es: ", registro)
        return Response.json({registro})
    } catch (error) {
        console.log("error al devolver registro:", error)
    }
}