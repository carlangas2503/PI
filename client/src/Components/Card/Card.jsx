import { Link } from "react-router-dom"
import style from "./Card.module.css"

export default function Card({id,weight,temperament,name,onClose,image}){
    return(   
      <div className={style.container}>
          <button className={style.boton} onClick={()=>onClose(name)}>X</button>
          <h3 className={style.name}>{name}</h3>
          <Link to= {`/detail/${id}`}>
            <img className={style.imagen} src={image.url} alt={image.id}/>
          </Link>
          <h5>Temperamentos</h5>
          <h5 className={style.textos}>{temperament}</h5>
          <h5 className={style.textos}> peso : {weight.metric}kg</h5>
      </div>
    )
}