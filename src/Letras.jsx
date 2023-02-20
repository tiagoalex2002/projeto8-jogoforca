import alfabetomaiusculo from "./alfabetomaiusculo"

export default function Caixas(){
    return(
        <div>
            {alfabetomaiusculo.map((i) => (<button className="caixaletras">{i}</button>))}
        </div>
    )
}