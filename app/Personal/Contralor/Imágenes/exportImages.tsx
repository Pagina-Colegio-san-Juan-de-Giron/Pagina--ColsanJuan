import Personero1 from "@/app/Personal/Contralor/Imágenes/fotoIDK.jpg"
import Personero2 from "@/app/Personal/Contralor/Imágenes/fotoIDK2.jpg"
import Personero3 from "@/app/Personal/Contralor/Imágenes/fotoIDK3.jpg"
import { StaticImageData } from "next/image"

const ImagenesPersoneros: Record<string, StaticImageData> = {
    FotoIDK: Personero1, 
    FotoIDK2: Personero2, 
    FotoIDK3: Personero3
}

export default ImagenesPersoneros