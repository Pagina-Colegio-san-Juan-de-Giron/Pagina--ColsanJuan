import fs from 'node:fs/promises'
import path from 'path'

export async function DELETE(req: Request) {
    try{
        const data = await req.json()
        const {name, cname} = data


        if (typeof name === 'string') {
            const Directorio = path.join(process.cwd(), `app/Contratacion_copy/ADMIN/Secretaria/Clases_contrataciones/${cname}/ Licitaciones`, name);
            console.log(Directorio)


            await fs.rm(Directorio, {recursive: true, force: true})
            return new Response(JSON.stringify({message: "Archivo borrado"}), {status: 200})
        }
    }catch(e){
            console.log("error al borrar directorio", e)
            return new Response(JSON.stringify({message: "error en el borrado"}), {status: 400})
    }
}