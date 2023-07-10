import { useState } from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css"
function Cards({characters,onClose,orderByName,deDb,orderByPeso}) {
    const [ ordenado, setOrdenado ] = useState({
        nombre:false,
        peso:false,
    })
    const [ render, setRender ] = useState({
        nombre:"descendente",
        peso:"descendente"
    })
    return(
        <div>
            <div className={style.container}>
            {characters?.map(({id,weight,name,temperament,image,})=>
            <Card
            max = {characters.length}
            id = {id}
            key = {id}
            name = {name}
            temperament = {temperament}
            weight = {weight}
            onClose={onClose}
            image={image}/>)}
            </div>
            <div className={style.containerButtons}>
                <button className={style.buttons}
                onClick={()=>{orderByName(characters,
                char=>char.name,ordenado.nombre);
                setOrdenado({...ordenado,nombre:!ordenado.nombre});
                ordenado.nombre?setRender({...render,nombre:"descendente"}):setRender({...render,nombre:"ascendente"})}}>Ordenar por Nombre {render.nombre}</button>
                <button className={style.buttons} onClick={()=>deDb('yes')}>Desde la base de datos</button>
                <button className={style.buttons} onClick={()=>deDb('no')}>Desde la Api</button>
            </div>
        </div>
    )
}
export default Cards;