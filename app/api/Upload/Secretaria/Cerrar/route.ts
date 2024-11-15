import path from 'path'
import fs from 'node:fs/promises'


export async function POST(req: Request) {


  try{
    const data = await req.formData()
    const file = data.get('File')
    const name = data.get('Name')

    if (typeof file === 'object' && file instanceof Blob && typeof name === 'string') {

        const bytes = await file.arrayBuffer();

        const buffer = Buffer.from(bytes)

       
        const Directorio = path.join(process.cwd(), 'app/Contratacion/ADMIN/Secretaria/Licitaciones', name);
        
        const files = await fs.readdir(Directorio)

        for(const File of files){
            await fs.unlink(path.join(Directorio, File));
        }

        try{
            await fs.writeFile(Directorio, buffer)
            console.log("archivo subido");
            return new Response(JSON.stringify({ message: "uploaded file" }));
        }
        catch{
            return new Response(JSON.stringify({message: "ERROOOOR"}),{status: 400,})
        }

    }

    
    }
    catch{
        return new Response(JSON.stringify({message: "ERROOOOR, general"}),{status: 400,})
    }

    
    
}
