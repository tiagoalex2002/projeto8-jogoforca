import alfabetomaiusculo from "./alfabetomaiusculo"
import { useState } from "react"



export default function Caixas(){
    const [desabilitado, setDesabilitado] = useState(true)
    const [classebotao, setClassebotao] = useState("desabilitado")

    function Organizar(props){
        return (
                <button className={classebotao} data-test="letter"  disabled = {desabilitado}>{props.letra}</button>
        )
    }
    return(
        <div className="containerletra">
            {alfabetomaiusculo.map((i) => (<Organizar letra={i}/> ))}
        </div>
    )
}