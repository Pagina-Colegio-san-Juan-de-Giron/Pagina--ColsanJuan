import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

const rutaarchivos = "public/img";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const filenames = fs.readdirSync(rutaarchivos);
  return Response.json({filenames})
}
