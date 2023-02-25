import Estrutura from "./Jogo"
import Caixas from "./Letras"
import forca from "./forca"
import { useState } from "react"

export default function App(){
    const [desabilitado, setDesabilitado] = useState(true)
    const [classebotao, setClassebotao] = useState("desabilitado")
    const [imagem, setImagem] = useState(forca[0])
    const [underlines, setUnderlines]= useState("")
    return(
        <div className="containerinicial">
            <Estrutura imagem={imagem} setImagem={setImagem} underlines={underlines} estado={desabilitado} setEstado={setDesabilitado}/>
            <Caixas estado={desabilitado} setEstado={setDesabilitado} classe={classebotao} setClasse={setClassebotao}/>
        </div>
    )
}