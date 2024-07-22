import path from 'path'
import {writeFile, mkdir, readdir} from 'fs'
import { unlink } from 'fs/promises';
const fs = require('fs');

let contador: number = 0;

export async function POST(req: Request, res: Response) {
    

  try{
    contador++;
    const data = await req.formData()
    const file = data.get('File')
    const name = data.get('Name')

    if (typeof file === 'object' && file instanceof Blob && typeof name === 'string') {

        const bytes = await file.arrayBuffer();

        const buffer = Buffer.from(bytes)

       
        const Directorio = path.join(process.cwd(), 'app/Contratacion/ADMIN/Secretaria/Licitaciones', name);
        
        const files = await fs.promises.readdir(Directorio)

        for(const File of files){
            await fs.promises.unlink(path.join(Directorio, File));
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
