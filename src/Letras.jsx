import alfabetomaiusculo from "./alfabetomaiusculo"
import { useState } from "react"



export default function Caixas(){
    const [desabilitado, setDesabilitado] = useState(true)
    const [classebotao, setClassebotao] = useState(".desabilitado")

    function Clique(){
        setDesabilitado(false)
        setClassebotao()
    }
    return(
        <div className="containerletra">
            {alfabetomaiusculo.map((i) => (<div className={classebotao}>
                <button data-test="letter"  disabled = {desabilitado}>{i}</button>
            </div>))}
        </div>
    )
}