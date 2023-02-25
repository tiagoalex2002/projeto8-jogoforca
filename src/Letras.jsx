import alfabetomaiusculo from "./alfabetomaiusculo"


export default function Caixas(props){

    function Clique(index){
        let indexNovo= index.toLowerCase()
        const novoArray=[...props.letrasSelecionadas,indexNovo]
        if(props.letrasSelecionadas.includes(indexNovo)){
            let i=0;
         }
         else{
            {props.setLetrasSelecionadas(novoArray)}
            {props.setDesabilitado(true)}
         }
         console.log(novoArray)
        }
    return(
        <div className="containerletra">
            {alfabetomaiusculo.map((i) => ( <button onClick={() => Clique(i)} 
                className={`botao ${props.letrasSelecionadas.includes(i)? "desabilitado" : props.classe}`}
                data-test="letter"
                disabled={ props.letrasSelecionadas.includes(i)}>
                    {i}</button>))}
        </div>
    )
}