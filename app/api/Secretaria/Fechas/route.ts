
import db from "@/libs/db"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function POST(req: Request) {
    const data = await req.formData()
    const Fecha = data.get('Fecha')
    const Nombre = data.get('Nombre')

    if(typeof Fecha === 'string' && typeof Nombre === 'string'){

        try{
            const resp = await db.fecha.create({
                data: {
                    Nombre: Nombre,
                    Fecha: Fecha
                }
            })
            console.log("Fecha subida", resp)
            return new Response(JSON.stringify({ data: resp }), { status: 200 });
        }
        catch(err){
            console.log("Error al crear el registro:", err);
        }
        
    }else {
        console.log("Datos invalidos")
        return new Response(JSON.stringify({ error: "Datos inválidos" }), { status: 400 });
    }
    
    
    
}