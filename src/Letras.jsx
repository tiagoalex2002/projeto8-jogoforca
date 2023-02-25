import alfabetomaiusculo from "./alfabetomaiusculo"
import { useState } from "react"



export default function Caixas(props){

    function Clique(){
        {props.setClasse("desabilitado")}
    }
   

    function Organizar(prop){
        return (
                <button  onClick= {Clique} className={props.classe} data-test="letter"  disabled = {props.estado}>{prop.letra}</button>
        )
    }
    return(
        <div className="containerletra">
            {alfabetomaiusculo.map((i) => (<Organizar letra={i}/> ))}
        </div>
    )
}