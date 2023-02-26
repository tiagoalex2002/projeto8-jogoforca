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
            {props.setDesabilitado(true)}
         }

        if(props.palavraEscolhida.includes(indexNovo)){
            {props.setContador(props.contador)}
            let indices=[]
            let corretas=[]
            {props.setLetrasCorretas([...props.letrasCorretas,indexNovo])}
            corretas.push(indexNovo)
            let indice = props.palavraEscolhida.indexOf(indexNovo)
            indices.push(indice)
            let alteracoes = props.palavraEscolhida
            alteracoes.splice(indice,1,"-")
            let auxiliar= alteracoes.indexOf(indexNovo)
            while(auxiliar !== -1){
               indices.push(auxiliar)
               corretas.push(indexNovo)
               {props.setLetrasCorretas([...props.letrasCorretas,indexNovo,indexNovo])}
               alteracoes.splice(auxiliar,1,"-")
               auxiliar= alteracoes.indexOf(indexNovo)
            }
            let palavraalteracao = props.underlines
            for(let i=0; i < indices.length; i++){
                palavraalteracao.splice(indices[i],1,indexNovo)
            }
            {props.setUnderlines(palavraalteracao)}
            console.log(props.letrasCorretas)
            console.log(props.underlines.length )
            console.log(props.letrasCorretas.length )

        }
        else{
            let d = props.contador + 1
            if (d <= 6){
                {props.setContador(props.contador + 1)};
                {props.setImagem(forca[d])}
            }
            
        }
    }

    return(
        <div className="containerletra">
            {alfabetomaiusculo.map((i) => ( <button onClick={() => Clique(i)} 
                className={`botao ${(props.letrasSelecionadas).includes(i)? "desabilitado" : props.classe}`}
                data-test="letter"
                disabled={(props.letrasSelecionadas).includes(i) || (props.letrasSelecionadas).length === 0?  props.desabilitado : false}>
                    {i}</button>))}
        </div>
    )
}