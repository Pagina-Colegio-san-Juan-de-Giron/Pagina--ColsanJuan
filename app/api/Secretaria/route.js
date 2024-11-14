import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'node:fs'
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
          path: rutaFile
        };
        return carpeta
      });
      return carpetas
    });
  }
  
  


export async function GET(req, res, NextApiResponse) {
 try {
  const url = new URL(req.url);
  const searchparams = new URLSearchParams(url.searchParams)
  const Dirpath = searchparams.get("Dirpath")
  if (Dirpath) {
    const dirleer = path.join("app/Contratacion/ADMIN/Secretaria/Licitaciones", Dirpath)
    const data = leerdir([dirleer])
    console.log(data)
    return Response.json(data)  
  }
  else{
    const data = leerdir(["app/Contratacion/ADMIN/Secretaria/Licitaciones"])
    console.log(data)
    return Response.json(data)
  }
  
 } catch (err) {
  console.log("holi :)", err)
  return Response.json(err);
 }
}