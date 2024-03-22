import path from 'path'
import {writeFile} from 'fs'

export async function POST(req: Request, res: Response) {
    

  try{
    const data = await req.formData()
    const file = data.get('File')

    if (typeof file === 'object' && file instanceof Blob) {

        const bytes = await file.arrayBuffer();

        const buffer = Buffer.from(bytes)

        const rutaarchivo = path.join(process.cwd(), 'public', file.name)
        writeFile(rutaarchivo, buffer, (err) => {
            if (err)
              console.log(err);
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
