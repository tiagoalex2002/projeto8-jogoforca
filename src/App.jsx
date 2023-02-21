import Estrutura from "./Jogo"
import Caixas from "./Letras"
import forca from "./forca"

export default function App(){
    const [desabilitado, setDesabilitado] = useState(true)
    const [classebotao, setClassebotao] = useState(".desabilitado")
    const [imagem, setImagem] = useState(forca[0])
    return(
        <div className="containerinicial">
            <Estrutura/>
            <Caixas/>
        </div>
    )
}