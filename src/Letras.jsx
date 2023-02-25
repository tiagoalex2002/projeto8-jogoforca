import alfabetomaiusculo from "./alfabetomaiusculo"


export default function Caixas(props){

    function Organizar(prop){
        return (
                <button onClick={() => props.clique(prop.letra)} 
                className={props.letrasSelecionadas.length === 0 ? props.classe: "desabilitado"} 
                data-test="letter"
                disabled={props.letrasSelecionadas.length=== 0 ? props.desabilitado : props.letrasSelecionadas.includes(prop.letra)}>
                    {prop.letra}</button>
        )
    }
    
    return(
        <div className="containerletra">
            {alfabetomaiusculo.map((i) => (<Organizar letra={i}/> ))}
        </div>
    )
}