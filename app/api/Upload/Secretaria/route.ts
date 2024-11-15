import path from 'path'
import {writeFile} from 'fs'
import * as fs from 'fs';

export async function POST(req: Request) {


  try{
    const data = await req.formData()
    const file = data.get('File')
    const name = data.get('Name')

    if (typeof file === 'object' && file instanceof Blob && typeof name === 'string') {

        const bytes = await file.arrayBuffer();

        const buffer = Buffer.from(bytes)


        const Directorio = path.join(process.cwd(), 'app/Contratacion/ADMIN/Secretaria/Licitaciones', name);
        const rutaarchivo = path.join(Directorio, file.name)
        console.log(Directorio)

        await fs.promises.mkdir(Directorio, { recursive: true });


          console.log(rutaarchivo);

          writeFile(rutaarchivo, buffer, (err) => {
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
    console.log(error)
    return new Response(JSON.stringify({message: "ERROOOOR"}),{status: 400,})
  }
}