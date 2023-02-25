import alfabetomaiusculo from "./alfabetomaiusculo"
import forca from "./forca";


export default function Caixas(props){

    function Clique(index){
        let indexNovo= index.toLowerCase()
        const novoArray=[...props.letrasSelecionadas,indexNovo]
        if(props.letrasSelecionadas.includes(indexNovo)){
            let i=0;
         }
         else{
            {props.setLetrasSelecionadas(novoArray)}
         }
         console.log(novoArray)

        if(props.palavraEscolhida.includes(indexNovo)){
            let j=0
        }
        else{
            let j=1
            {props.setImagem(forca[j])}
        }
    }


    return(
        <div className="containerletra">
            {alfabetomaiusculo.map((i) => ( <button onClick={() => Clique(i)} 
                className={`botao ${props.letrasSelecionadas.includes(i)? "desabilitado" : props.classe}`}
                data-test="letter"
                disabled={ props.letrasSelecionadas.includes(i) ? false : props.desabilitado}>
                    {i}</button>))}
        </div>
    )
}