import process from 'process';
import fs from 'fs'
import path from 'path'
import { error } from 'console';


export async function GET(req, ) {
 try{

    const url = new URL(req.url);
    const searchparams = new URLSearchParams(url.searchParams)
    const Filepath = searchparams.get("Filepath")
    const Filename = searchparams.get("Filename")

    if (!Filepath || !Filename) return new Response(JSON.stringify({message: "Faltan Filepath y/o Filename en la query"}),{status: 400,})
    console.log(Filepath)    
    const rutadocumento = path.join(process.cwd(), Filepath)
    console.log("rutadocumento: ", rutadocumento)

    if (!fs.existsSync(rutadocumento)) {
        console.log("Error", error)
        return new Response(JSON.stringify({message: "No existe el archivo"}),{status: 404,})
    }

    const contenidosSegunTipoArchivo = {
        png: "image/png",
        jpg: "image/jpeg",
        pdf: "application/pdf",
    };

    const extension = Filename.split(".").pop();

    console.log("extension: ", extension)

    const TipoContenido =  contenidosSegunTipoArchivo[extension] || "application/octet-stream"


    const headers = new Headers({
        "Content-Disposition": `inline; filename="${Filename}"`,
        "Content-Type": TipoContenido
    });


    const flujolectura = fs.createReadStream(Filepath);

    return new Response(flujolectura, {
        headers
    });
 }


 catch(err){
    console.log(err)
 }
}


