import path from 'path'
import fs from 'fs';

export async function POST(req: Request) {

    let data
    let file
    let name
    let contract
    let Fname;

  try{
    data = await req.formData()
    file = data.get('File')
    name = data.get('Name')
    contract = data.get('Contract')
    Fname = data.get('Filename')
  }
  catch(error){
    console.log("Error al obtener del formulario", error)
    return new Response(JSON.stringify({message: "Error al obtener del formmulario", error}),{status: 400,})
  }

  if (typeof file === 'object' && file && file !== null && file instanceof Blob && typeof name === 'string' && typeof Fname === 'string' && Fname !== null) {
    let bytes
    let buffer
      try {
        bytes = await file.arrayBuffer();
        buffer = Buffer.from(bytes)
      } catch (error) {
        console.log("Error al obtener buffer", error)
        return new Response(JSON.stringify({message: "error al obtener buffer"}),{status: 500})
      }
      


    const Directorio = path.join(process.cwd(), `app/Contratacion_copy/ADMIN/Secretaria/Clases_contrataciones/${contract}/Licitaciones`, name);
    const rutaarchivo = path.join(Directorio, Fname)
    console.log(Directorio)
    const PlantillaPath = path.join (process.cwd(), 'app/Contratacion_copy/Plantilla_contratacion')
    const destinoPlantilla = path.join(process.cwd(), `app/Contratacion_copy/Clases_contrataciones/${contract}`)
      try {
        //if(fs.existsSync(`app/Contratacion_copy/ADMIN/Secretaria/Clases_contrataciones/${contract}`)){
          await fs.promises.mkdir(Directorio, { recursive: true });
        //}
      } catch (error) {
        console.log("error al crear directorio", error)
        return new Response(JSON.stringify({message: "error al crear directorio"}),{status: 500})
      }

      try{
        if(fs.existsSync(`app/Contratacion_copy/Clases_contrataciones/${contract}`)){
          await fs.promises.mkdir(destinoPlantilla, { recursive: true });
          await fs.promises.cp(PlantillaPath, destinoPlantilla, { recursive: true });
        }
      }catch(e){
        console.log("error al copiar la plantilla en el destino", e)
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