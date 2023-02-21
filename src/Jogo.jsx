
import palavras from "./palavras"
import forca from "./forca";


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  
function EscolherPalavra(){
   let indice = getRandomArbitrary(0, palavras.length);
   let palavra= palavras[indice]
   let tam = palavra.length

}

export default function Estrutura({imagem,setImagem}){
    
    return (
        <div className="container">
            <img src={imagem}/>
            <button onClick={EscolherPalavra}>Escolher Palavra</button>
        </div>
    )
}