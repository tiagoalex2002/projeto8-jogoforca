import Estrutura from "./Jogo"
import Caixas from "./Letras"
import forca from "./forca"
import { useState } from "react"

export default function App(){
    const [desabilitado, setDesabilitado] = useState(true)
    const [classebotao, setClassebotao] = useState("desabilitado")
    const [imagem, setImagem] = useState(forca[0])
    const [underlines, setUnderlines]= useState("")
    const [letrasSelecionadas, setLetrasSelecionadas] = useState([])
    const [palavraEscolhida, setPalavraEscolhida]= useState([])
    const [palavraerro,setPalavraerro] = useState([])
    const [contador, setContador] = useState(0)
    const [letrasCorretas, setLetrasCorretas] = useState([])

    function Clique(index){
        let indexNovo= index.toLowerCase()
        setLetrasSelecionadas([...letrasSelecionadas,indexNovo])
        const novoArray= [...letrasSelecionadas,indexNovo]
        console.log(novoArray)

        if(palavraEscolhida.includes(indexNovo)){
            setContador(contador)
            let indices=[]
            let corretas=[]
            setLetrasCorretas([...letrasCorretas,indexNovo])
            corretas.push(indexNovo)
            let indice = palavraEscolhida.indexOf(indexNovo)
            indices.push(indice)
            let alteracoes = palavraEscolhida
            alteracoes.splice(indice,1,"-")
            let auxiliar= alteracoes.indexOf(indexNovo)
            while(auxiliar !== -1){
               indices.push(auxiliar)
               corretas.push(indexNovo)
               setLetrasCorretas([...letrasCorretas,indexNovo,indexNovo])
               alteracoes.splice(auxiliar,1,"-")
               auxiliar= alteracoes.indexOf(indexNovo)
            }
            let palavraalteracao = underlines
            for(let i=0; i < indices.length; i++){
                palavraalteracao.splice(indices[i],1,indexNovo)
            }
            {setUnderlines(palavraalteracao)}
            

        }
        else{
            let d = contador + 1
            if (d < 6){
                setContador(contador + 1)
                setImagem(forca[d])
            }
            else if(d===6){
                setImagem(forca[d])
                setUnderlines(palavraerro)
            }
            
        }
    }


    return(
        <div className="containerinicial">
            <Estrutura imagem={imagem} setImagem={setImagem} underlines={underlines} setUnderlines={setUnderlines} estado={desabilitado} setEstado={setDesabilitado} 
            classe={classebotao} setClasse={setClassebotao} palavraEscolhida={palavraEscolhida} setPalavraEscolhida={setPalavraEscolhida}
            letrasCorretas={letrasCorretas} setLetrasCorretas={setLetrasCorretas}
            palavraerro={palavraerro} setPalavraerro={setPalavraerro}/>
            <Caixas desabilitado={desabilitado} setDesabilitado={setDesabilitado} classe={classebotao} setClasse={setClassebotao} 
            letrasSelecionadas={letrasSelecionadas} setLetrasSelecionadas={setLetrasSelecionadas} palavraEscolhida={palavraEscolhida} imagem={imagem} setImagem={setImagem} 
            contador={contador} setContador={setContador} underlines={underlines} setUnderlines={setUnderlines}
            letrasCorretas={letrasCorretas} setLetrasCorretas={setLetrasCorretas} Clique={Clique}/>
        </div>
    )
}
