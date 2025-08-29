'use server'
import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req){

    //const clientid = process.env.GOOGLE_CLIENT_ID
    //const clientsecret = process.env.GOOGLE_CLIENT_SECRET
    const user = process.env.EMAIL_USER
    const Pass = process.env.EMAIL_PASS

    


    const data = await req.formData()
    const nombre = data.get("nombre")
    const mensaje = data.get("mensaje")
    const correo = data.get("correo")
    const files = data.getAll("Files") as File[];   
  //const {nombre, mensaje, correo} = req.json();

    try{
        

        const adjuntos = await Promise.all(
            files.map(async (file) => {
              const arrayBuffer = await file.arrayBuffer();
              return {
                filename: file.name,
                content: Buffer.from(arrayBuffer),
              };
            })
          );

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: user,
                pass: Pass,
                //clientId: clientid,
                //clientSecret: clientsecret,
            },
        }as nodemailer.TransportOptions);

        console.log(adjuntos)

        const mailOpts = {
            from: user,
            to: "Santiiagoshane@gmail.com",
            subject: nombre,
            text: `Correo de respuesta: ${correo} 
            ${mensaje}`,
            attachments: adjuntos
        }

        await transporter.sendMail(mailOpts)
        console.log("correo enviado")
        return NextResponse.json({ message: "Correo enviado con éxito" });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      return NextResponse.json(
        { error: "Error al enviar el correo" },
        { status: 500 }
      );
    }
  

}