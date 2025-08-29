import fs from 'node:fs'
import path from 'path'

let idcontador = 0;


  const leerdir = (rutacarpetas) => {
    return rutacarpetas.flatMap(rutacarpeta => {
      const filenames = fs.readdirSync(rutacarpeta);
      const carpetas = filenames.map(file => {
        const rutaFile = path.join(rutacarpeta, file);
        const Isfolder = fs.lstatSync(rutaFile).isDirectory();
        const ParentFolder = path.basename(path.dirname(rutaFile));
        const carpeta = {
          id: idcontador++,
          EsCarpeta: Isfolder,
          name: file,
          items: Isfolder ? leerdir([rutaFile]) : [],
          path: rutaFile,
          Parent: ParentFolder
        };
        return carpeta
      });
      return carpetas
    });
  }
  
  


export async function GET(req) {
 try {
  const url = new URL(req.url);
  const searchparams = new URLSearchParams(url.searchParams)
  const Dirpath = searchparams.get("Dirpath")
  const ContractName = searchparams.get("Contract")
  if (Dirpath) {
    const dirleer = path.join(`app/Contratacion_copy/ADMIN/Secretaria/Clases_contrataciones/${ContractName}/Licitaciones`, Dirpath)
    const data = leerdir([dirleer])
    console.log(data)
    return Response.json(data)  
  }
  else{
    const data = leerdir([`app/Contratacion_copy/ADMIN/Secretaria/Clases_contrataciones/${ContractName}/Licitaciones`])
    console.log(data)
    return Response.json(data)
  }
  
 } catch (err) {
  console.log("holi :)", err)
  return Response.json(err);
 }
}