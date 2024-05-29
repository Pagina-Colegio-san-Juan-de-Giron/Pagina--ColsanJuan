import { NextApiRequest, NextApiResponse } from 'next'
import fs, { lstat } from 'fs'
import path from 'path'

let idcontador = 0;



  const leerdir = (rutacarpetas) => {
    return rutacarpetas.flatMap(rutacarpeta => {
      const filenames = fs.readdirSync(rutacarpeta);
      const carpetas = filenames.map(file => {
        const rutaFile = path.join(rutacarpeta, file);
        const Isfolder = fs.lstatSync(rutaFile).isDirectory();
        const baseDir = path.resolve("public")
        const carpeta = {
          id: idcontador++,
          EsCarpeta: Isfolder,
          name: file,
          items: Isfolder ? leerdir([rutaFile]) : [],
          path: rutaFile,
        };
        return carpeta
      });
      return carpetas
    });
  }
  
  


export async function GET(req, res, NextApiResponse) {
 try {
  const data = leerdir(["public/"])
  console.log(data)
  return Response.json(data)
 } catch (err) {
  console.log("holi :)", err)
  return Response.json(err);
 }
}