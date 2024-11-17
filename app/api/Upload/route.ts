import path from 'path'
import {writeFile} from 'node:fs'
import fs from 'node:fs'



export async function POST(req: Request) {
  

  try{
    const data = await req.formData()
    const file = data.get('File') as File
    const name = data.get('Name') as string
    const Dirname = data.get('Dirname') as string

    if (typeof file === 'object' && file instanceof Blob && typeof name === 'string') {

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes)
        const carpetanumerada = `Propuesta_${name}`
        
        const Directorio = path.join(process.cwd(), 'app/Contratacion/ADMIN/Secretaria/Licitaciones', Dirname ,carpetanumerada);
        const rutaarchivo = path.join(Directorio, file.name)

        await fs.promises.mkdir(Directorio, { recursive: true });


          console.log(rutaarchivo);

          writeFile(rutaarchivo, buffer, (err) => {
              if (err)
                console.log(err, "error");
              else {
                
                console.log("archivo subido");
                return new Response(JSON.stringify({message: "Archivo subido"}),{status: 200,})
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
    return new Response(JSON.stringify({message: "ERROOOOR", error}),{status: 400,})

  }
    
}
