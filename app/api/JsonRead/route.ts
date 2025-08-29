import fs from 'fs/promises'

export async function GET() {
    try{
        const readedfile = await fs.readFile(process.cwd() + '/app/Gobierno_Escolar/Consejo_Academico/Data.json', 'utf8');
        const data = JSON.parse(readedfile)
        console.log(data)
        return Response.json({data})
    }catch(e){
        console.log("errorleyendo", e)
    }
    
}
