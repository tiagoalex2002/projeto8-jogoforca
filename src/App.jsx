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

    function Clique(index){
        let indexNovo= index.toLowerCase()
        if(letrasSelecionadas.includes(indexNovo)){
            let i=0
         }
         else{
            setLetrasSelecionadas([...letrasSelecionadas,indexNovo])
         }
    }

    return(
        <div className="containerinicial">
            <Estrutura imagem={imagem} setImagem={setImagem} underlines={underlines} setUnderlines={setUnderlines} estado={desabilitado} setEstado={setDesabilitado} classe={classebotao} setClasse={setClassebotao} palavraEscolhida={palavraEscolhida} setPalavraEscolhida={setPalavraEscolhida} />
            <Caixas desabilitado={desabilitado} setDesabilitado={setDesabilitado} classe={classebotao} setClasse={setClassebotao} 
            letrasSelecionadas={letrasSelecionadas} setLetrasSelecionadas={setLetrasSelecionadas} palavraEscolhida={palavraEscolhida} clique={Clique}/>
        </div>
    )
}
