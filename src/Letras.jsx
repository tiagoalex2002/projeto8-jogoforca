import alfabetomaiusculo from "./alfabetomaiusculo"
import { useState } from "react"



export default function Caixas(){
    const [desabilitado, setDesabilitado] = useState(true)
    const [classebotao, setClassebotao] = useState(".desabilitado")
    return(
        <div className="containerletra">
            {alfabetomaiusculo.map((i) => (<button className={classebotao} disabled = {desabilitado}>{i}</button>))}
        </div>
    )
}