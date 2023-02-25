import alfabetomaiusculo from "./alfabetomaiusculo"



export default function Caixas(props){
    let i=0
    let selecionadasletras=[]
    function Clique(index){
         if(selecionadasletras.includes(index)){
            i=0
         }
         else{
            i=1
            selecionadasletras.push(index)
            {props.setLetrasSelecionadas(selecionadasletras)}
            {props.setDesabilitado(true)}
            
         }
       
    }
   

    function Organizar(prop){
        return (
                <button onClick={() => Clique(prop.letra)} className={i=0 ? props.classe: "desabilitado"} data-test="letter" disabled={i=0 ? props.desabilitado : selecionadasletras.includes(prop.letra)}>{prop.letra}</button>
        )
    }
    return(
        <div className="containerletra">
            {alfabetomaiusculo.map((i) => (<Organizar letra={i}/> ))}
        </div>
    )
}