import { useState } from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css"
function Cards({characters,onClose,orderByName,deDb}) {
    const [ ordenado, setOrdenado ] = useState(false)
    const [ render, setRender ] = useState("descendente")
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
                <button className={style.buttons}
                onClick={()=>{orderByName(characters,
                char=>char.name,ordenado);
                setOrdenado(!ordenado);
                ordenado?setRender("descendente"):setRender("ascendente")}}>Ordenar por Nombre {render}</button>
                <button className={style.buttons} onClick={()=>deDb('yes')}>Desde la base de datos</button>
                <button className={style.buttons} onClick={()=>deDb('no')}>Desde la Api</button>
            </div>
        </div>
    )
}
export default Cards;