
import palavras from "./palavras"

export default function Estrutura(props){

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
      
    function EscolherPalavra(){
       
       let indice = getRandomArbitrary(0, palavras.length);
       let palavra= palavras[indice]
       let tam = palavra.length;
       let espaco=""
       for(let i=0; i < tam; i++){
        espaco= espaco + "_"
       }
       {props.setUnderlines(espaco)}
       {props.setClasse("habilitado")}

    }
    
    return (
        <div className="container">
            <img src={props.imagem}/>
            <div>
               <button data-test="choose-word" onClick={EscolherPalavra}>Escolher Palavra</button>
               <p data-test="word" className="">{props.underlines}</p>
            </div>
        </div>
    )
}