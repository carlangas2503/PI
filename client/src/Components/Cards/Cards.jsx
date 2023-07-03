import { useState } from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css"
function Cards({characters,onClose,orderByName,deDb}) {
    const [ ordenado, setOrdenado ] = useState(false)
    return(
        <div>
            <div className={style.container}>
            {characters?.map(({id,weight,name,temperament,image})=>
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
                <button className={style.buttons} onClick={()=>{orderByName(characters,char=>char.name,'asc'); setOrdenado(!ordenado)}}>Ordenar por Nombre ascendente</button>
                <button className={style.buttons} onClick={()=>{orderByName(characters,char=>char.name,'desc'); setOrdenado(!ordenado)}}>Ordenar por Nombre descendente</button>
                <button className={style.buttons} onClick={()=>deDb('yes')}>Desde la base de datos</button>
                <button className={style.buttons} onClick={()=>deDb('no')}>Desde la Api</button>
            </div>
        </div>
    )
}
export default Cards;