export default function Caixas(props){
    return(
        <div>
            {props.map((i) => (<button className="caixaletras">{i}</button>))}
        </div>
    )
}