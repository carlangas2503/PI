import { useState,useEffect } from "react"
import style from "./Paginado.module.css"
import { useDispatch,useSelector } from 'react-redux'
import {getTemperamentos} from '../../redux/actions'
import { Link } from "react-router-dom"

const Paginado = (props)=>{
    const dispatch = useDispatch()
    const temper = useSelector((state)=>state.temperamentos?.sort())
    const items = props.items.map((item)=>{
        return (
            <div key={item.id} className={style.containerCards}>
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
    const [ordenPeso,setOrdenPeso] = useState(false)
    const [ordenAltura,setOrdenAltura]=useState(false)
    const [nameOrdenPeso,setNameOrdenPeso] = useState('descendente')
    const [nameOrden,setNameOrdne] = useState("descendente")
    const [nameOrdenAltura,setNameOrdenAltura] = useState('descendente')
    useEffect(()=>{
        dispatch(getTemperamentos())
    },[dispatch])
    const handleSe = (eve)=>{
        props.filterByTemp(eve.target.value)
    }
    return(
        <div>
            <button className={style.boton2} onClick={props.prevHandler}>prev</button>
            --- {props.currentPage+1} ---
            <button className={style.boton1} onClick={props.nextHandler}>next</button>

            <div className={style.container}>
            {items}
            </div>
            <div className={style.contFilters}>
            <button 
            className={style.filtro} 
            onClick={()=>{props.ordenPaginado(props.items,char=>char.name,orden);
            setOrden(!orden);
            !orden?setNameOrdne('ascendente'):setNameOrdne('descendente')}}>Ordenar por Nombre {nameOrden}</button>
            <button 
            className={style.filtro}
            onClick={()=>{props.ordenPeso(props.items,char=>char.weight.metric.split('').splice(0,2).join(''),ordenPeso);
            setOrdenPeso(!ordenPeso);
            !ordenPeso?setNameOrdenPeso("ascendente"):setNameOrdenPeso('descendente')}}>Ordenar por Peso {nameOrdenPeso}</button>
            <button
            className={style.filtro}
            onClick={()=>{props.ordenAltura(props.items,char=>char.height.metric.split('').splice(0,2).join(''),ordenAltura);
            setOrdenAltura(!ordenAltura);
            !ordenAltura?setNameOrdenAltura("ascendente"):setNameOrdenAltura('descendente')}}
            >Ordenar por Altura {nameOrdenAltura}</button>
            <button className={style.filtro} onClick={props.onlyDb} >Only data base</button>
            <button className={style.filtro} onClick={props.onlyApi}>Only Api</button>
            <button className={style.filtro} onClick={props.allDogs}>All Dogs</button>
            <select className={style.select} onChange={(event)=>{handleSe(event);}}>
                {temper?.map((temp)=>{      
                    return(
                        <option className={style.options} key={temp} name={temp}>
                            {temp}
                        </option>
                    )
                })}
            </select>
            
            </div>
        </div>
    )    
}
export default Paginado
