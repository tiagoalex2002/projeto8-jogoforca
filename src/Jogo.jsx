import "style"
import palavras from "./palavras"
import imagem0 from "./assets/forca0.png"
import imagem1 from "./assets/forca1.png"
import imagem2 from "./assets/forca2.png"
import imagem3 from "./assets/forca3.png"
import imagem4 from "./assets/forca4.png"
import imagem5 from "./assets/forca5.png"
import imagem6 from "./assets/forca6.png"

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  
function EscolherPalavra(){
   let indice = getRandomArbitrary(0, palavras.length);
   let palavra= palavras[indice]
   let tam = palavra.length

}

export default function Estrutura(){
    return (
        <div className="container">
            <img src={imagem0}/>
            <button onClick={EscolherPalavra}>Escolher Palavra</button>
        </div>
    )
}