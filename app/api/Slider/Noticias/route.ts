
import fs from 'fs'

const rutaarchivos = "app/Componentes/Imágenes/SliderNoticias";

export async function GET() {
  const filenames = fs.readdirSync(rutaarchivos);
  return Response.json({filenames})
}
