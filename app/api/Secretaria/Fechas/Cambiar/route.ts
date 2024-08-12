
import db from "@/libs/db"
export async function PUT(req: Request) {
    const data = await req.json()
    const {FechaNueva, Nombre} = data

    

    if(typeof FechaNueva === 'string' && typeof Nombre === 'string' ){

        

        try{
           const Reemplazo = await db.fecha.update({
            where: {Nombre},
            data: {Fecha: FechaNueva}
           })

           return new Response(JSON.stringify({NewDate: Reemplazo}), {status: 200})
        }
        catch(err){
            console.log("Error al crear el registro:", err);
        }
        
    }else {
        console.log("Datos invalidos")
        return new Response(JSON.stringify({ error: "Datos inválidos" }), { status: 400 });
    }
    
    
    
}