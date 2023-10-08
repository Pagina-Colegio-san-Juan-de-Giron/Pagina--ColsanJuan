import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

const rutaimagenes = "public/img";






export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const filenames = fs.readdirSync(rutaimagenes);

  return Response.json({filenames})
}
