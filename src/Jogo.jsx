
import palavras from "./palavras"
import forca from "./forca";
import { useState } from "react";


export default function Estrutura(){
    const [imagem, setImagem] = useState(forca[0])

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
      
    function EscolherPalavra(){
       let indice = getRandomArbitrary(0, palavras.length);
       let palavra= palavras[indice]
       let tam = palavra.length
    }
    
    return (
        <div className="container">
            <img src={imagem}/>
            <button data-test="choose-word" onClick={EscolherPalavra}>Escolher Palavra</button>
        </div>
    )
}