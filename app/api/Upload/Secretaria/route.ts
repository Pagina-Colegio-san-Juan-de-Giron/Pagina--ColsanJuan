import path from 'path'
import fs from 'fs';

export async function POST(req: Request) {

    let data
    let file
    let name

  try{
    data = await req.formData()
    file = data.get('File')
    name = data.get('Name')
  }
  catch(error){
    console.log("Error al obtener del formulario", error)
    return new Response(JSON.stringify({message: "Error al obtener del formmulario", error}),{status: 400,})
  }

  if (typeof file === 'object' && file instanceof Blob && typeof name === 'string') {
    let bytes
    let buffer
      try {
        bytes = await file.arrayBuffer();
        buffer = Buffer.from(bytes)
      } catch (error) {
        console.log("Error al obtener buffer", error)
        return new Response(JSON.stringify({message: "error al obtener buffer"}),{status: 500})
      }
      


    const Directorio = path.join(process.cwd(), 'app/Contratacion/ADMIN/Secretaria/Licitaciones', name);
    const rutaarchivo = path.join(Directorio, file.name)
    console.log(Directorio)

      try {
        await fs.promises.mkdir(Directorio, { recursive: true });
      } catch (error) {
        console.log("error al crear directorio", error)
        return new Response(JSON.stringify({message: "error al crear directorio"}),{status: 500})
      }
      console.log(rutaarchivo);
      if(buffer){
        try {
          fs.promises.writeFile(rutaarchivo, buffer)
          console.log("archivo subido");
          return new Response(JSON.stringify({ message: "uploaded file" }), { status: 200 });
        } catch (error) {
          console.log("error al subir archivo", error)
          return new Response(JSON.stringify({ message: "error al subir el archivo", error }), { status: 500 });
        }
      }

  } 
  else 
  {
     console.error("El valor de no es un Blob. i GOT YOU");
     return new Response(JSON.stringify({message: "Valores incorrectos de file y/o name"}),{status: 400,})
  }
}
