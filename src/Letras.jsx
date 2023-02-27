import alfabetomaiusculo from "./alfabetomaiusculo"


export default function Caixas(props){


    return(
        <div className="containerletra">
            {alfabetomaiusculo.map((i) => ( <button onClick={() => props.Clique(i)} 
                data-test="letter"
                key={i}
                disabled={props.letrasSelecionadas.length===0 ? props.desabilitado : (props.letrasSelecionadas.includes(i))}>
                    {i}</button>))}
        </div>
    )
}