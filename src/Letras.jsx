import alfabetomaiusculo from "./alfabetomaiusculo"
import forca from "./forca"


export default function Caixas(props){


    return(
        <div className="containerletra">
            {alfabetomaiusculo.map((i) => ( <button onClick={() => props.Clique(i)} 
                data-test="letter"
                key={i}
                disabled={props.letrasSelecionadas.length===0 ? props.desabilitado : (props.imagem===forca[6] ? props.desabilitado : (props.underlines.length === (props.letrasCorretas.length)? true : props.letrasSelecionadas.includes(i)))}>
                    {i}</button>))}
        </div>
    )
}