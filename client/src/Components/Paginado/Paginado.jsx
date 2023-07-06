import { useState } from "react"
import style from "./Paginado.module.css"
import { Link } from "react-router-dom"

const Paginado = (props)=>{
    const items = props.items.map((item)=>{
        return (
            <div key={item.id} className={style.containerCards}>
                <h4 className={style.id}>ID: {item.id}</h4> 
                <Link to= {`/detail/${item.id}`}><img src={item.image.url} alt={item.image.id} className={style.imagen}/></Link>
                <h3>{item.name}</h3>
                <h5 className={style.parrafo}>Altura: {item.height.metric}Cm</h5>
               <h5 className={style.parrafo}>Peso: {item.weight.metric}Kg</h5>
               <h5 className={style.parrafo} >Temperamento: {item.temperament}</h5>
               <h5 className={style.parrafo}>Años de vida: {item.life_span}</h5>
            </div>
        )
    })
    const [orden,setOrden] = useState(false)
    const [nameOrden,setNameOrdne] = useState("")
    return(
        <div>
            <button className={style.boton2} onClick={props.prevHandler}>prev</button>
            <button className={style.boton1} onClick={props.nextHandler}>next</button>

            <div className={style.container}>
            {items}
            </div>
            <button className={style.filtro} onClick={()=>{props.ordenPaginado(props.items,char=>char.name,orden);setOrden(!orden);!orden?setNameOrdne('ascendente'):setNameOrdne('descendente')}}>Ordenar por {nameOrden}</button>
            
        </div>
    )    
}
export default Paginado
