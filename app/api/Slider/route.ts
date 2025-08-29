
import fs from 'fs'

const rutaarchivos = "public/img";

export async function GET() {
  const filenames = fs.readdirSync(rutaarchivos);
  return Response.json({filenames})
}
