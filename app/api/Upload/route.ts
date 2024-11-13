import path from 'path'
import {writeFile, mkdir} from 'fs'
const fs = require('fs');


export async function POST(req: Request, res: Response) {
    

  try{
    const data = await req.formData()
    const file = data.get('File')
    const name = data.get('Name')
    const Dirname = data.get('Dirname')

    if (typeof file === 'object' && file instanceof Blob && typeof name === 'string') {

        const bytes = await file.arrayBuffer();

        const buffer = Buffer.from(bytes)

        const carpetanumerada = `Propuesta_${name}`
        
        const Directorio = path.join(process.cwd(), 'app/Contratacion/ADMIN/Secretaria/Licitaciones', Dirname ,carpetanumerada);
        const rutaarchivo = path.join(Directorio, file.name)

        await fs.promises.mkdir(Directorio, { recursive: true });


          console.log(rutaarchivo);

          writeFile(rutaarchivo, buffer, (err: any) => {
              if (err)
                console.log(err, "error");
              else {
                
                console.log("archivo subido");
              }
            return new Response(JSON.stringify({message: "uploaded file"}))
          })
    } 
    else 
    {
        console.error("El valor de no es un Blob. i GOT YOU");
    }
  }
  catch(error){
    return new Response(JSON.stringify({message: "ERROOOOR"}),{status: 400,})

  }
    
}
