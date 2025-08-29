
import fs from 'fs'

const rutaarchivos = "app/Personal/Directivos_Docentes/Imágenes/carousel";

export async function GET() {
  const filenames = fs.readdirSync(rutaarchivos);
  console.log(filenames)
  return Response.json({filenames})
}
