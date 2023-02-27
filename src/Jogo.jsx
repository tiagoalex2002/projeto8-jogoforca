
import palavras from "./palavras"
import forca from "./forca";

export default function Estrutura(props){

    function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
      }
    
    function EscolherPalavra(){
       let indice = getRandomArbitrary(0, palavras.length);
       let palavra= palavras[indice];
       let palavraEmArray=[]
       let erro=[]
       console.log(palavra)
       let tam =palavra.length;
       let espaco=[]
       let contador=0
       
       while(contador < tam){
        espaco.push("_ ")
        palavraEmArray.push(palavra[contador])
        erro.push(palavra[contador])
        contador++;
       }
       
       {props.setUnderlines(espaco)}
       {props.setClasse("habilitado")}
       {props.setEstado(false)}
       {props.setPalavraEscolhida(palavraEmArray)}
       {props.setPalavraerro(erro)}
       console.log(palavraEmArray)

    }
    
    return (
        <div className="container">
            <img data-test="game-image" src={props.imagem} alt="forca"/>
            <div >
               <button data-test="choose-word" onClick={EscolherPalavra}>Escolher Palavra</button>
               <div data-test= "word" className={`container2${props.underlines.length === (props.letrasCorretas.length)? "green" : (props.imagem===forca[6] ? "red" : "")}`}>{props.underlines}</div>
            </div>
        </div>
    )
}