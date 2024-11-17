
import  db  from "@/libs/db"
import { Prisma } from "@prisma/client"
export async function PUT(req: Request) {
    const data = await req.json()
    const {FechaNueva, Nombre} = data


    const ExisteFecha = async (arg: Prisma.FechaCountArgs) => {
        const Existe = !!await db.fecha.count(arg)
        return Existe
    }
    
        let existenciaregistro
        try {
            existenciaregistro = await ExisteFecha({
                where: {
                    Nombre: Nombre
                }
            })
        } catch (error) {
            console.log("error al confirma existencia del registro: ", error)
        }

    if(typeof FechaNueva === 'string' && typeof Nombre === 'string' && existenciaregistro ){

            
                try{
                    const Reemplazo = await db.fecha.update({
                     where: {Nombre: Nombre},
                     data: {Fecha: FechaNueva}
                    })
         
                    return new Response(JSON.stringify({NewDate: Reemplazo}), {status: 200})
                 }
                 catch(err){
                     console.log("Error al crear el registro, en cambiar:", err);
                 } 
        

        
        
    }else {
        console.log("Datos invalidos, o no existe el archivo ","A continuacion nombre que se intento", Nombre)
        return new Response(JSON.stringify({ error: "Datos inválidos" }), { status: 400 });
    }
    
    
    
}