
import palavras from "./palavras"
import { useState } from "react";

export default function Estrutura(props){

    function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
      }
    
    function EscolherPalavra(){
       let indice = getRandomArbitrary(0, palavras.length);
       let palavra= palavras[indice];
       let palavraEmArray=[]
       console.log(palavra)
       let tam = palavra.length;
       let espaco=""
       let contador=0
       while(contador < tam){
        espaco= espaco + "_ ";
        palavraEmArray.push(palavra[contador])
        contador++;
       }
       {props.setUnderlines(espaco)}
       {props.setClasse("habilitado")}
       {props.setPalavraEscolhida(palavraEmArray)}
       console.log(palavraEmArray)

    }
    
    return (
        <div className="container">
            <img data-test="game-image" src={props.imagem}/>
            <div>
               <button data-test="choose-word" onClick={EscolherPalavra}>Escolher Palavra</button>
               <p data-test="word" className="">{props.underlines}</p>
            </div>
        </div>
    )
}