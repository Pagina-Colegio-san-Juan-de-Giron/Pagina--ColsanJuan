
import db  from "@/libs/db"
export async function POST(req: Request) {
    const data = await req.formData()
    const Fecha = data.get('Fecha')
    const Nombre = data.get('Nombre')

    

    if(typeof Fecha === 'string' && typeof Nombre === 'string' ){

        const Repetido = async() => {
            const resp = await db.fecha.findUnique({
                where: {
                    Nombre: Nombre
                }
            });
            if(resp?.Nombre === Nombre){
                return true
            }else{
                return false
            }
        }

        try{
            const DatoesRepetido = await Repetido()


            if(DatoesRepetido){
                return new Response(JSON.stringify({ error: "El nombre ya existe" }), { status: 400 });
            }
            else{
                const resp = await db.fecha.create({
                    data: {
                        Nombre: Nombre,
                        Fecha: Fecha
                    }
                })
                console.log("Fecha subida", resp)
                return new Response(JSON.stringify({ data: resp }), { status: 200 });
            }
            
        }
        catch(err){
            console.log("Error al crear el registro:, Fechas", err);
        }
        
    }else {
        console.log("Datos invalidos")
        return new Response(JSON.stringify({ error: "Datos inválidos" }), { status: 400 });
    }
    
    
    
}